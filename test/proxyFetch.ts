// A `fetch` for Node that honours http_proxy/https_proxy.
//
// Node's built-in fetch ignores the proxy environment variables, and undici's
// ProxyAgent is not reachable without adding a dependency. Anyone running the
// live end-to-end test from a network with no direct egress — corporate,
// conference, hotel — needs this; the browser demo never does, because a
// browser applies the system proxy itself.
//
// Only what the test actually issues: GET with no body, POST with an ArrayBuffer.

import { Buffer } from "node:buffer";
import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";
import { connect as tcpConnect, type Socket } from "node:net";
import { connect as tlsConnect } from "node:tls";

/** Must exceed the directory server's long-poll, which holds a request open
 *  for ~30s before answering that the mailbox is empty. Time out under that
 *  and a perfectly healthy relay gets struck off. */
const TIMEOUT_MS = 45_000;

interface MinimalResponse {
    ok: boolean;
    status: number;
    statusText: string;
    arrayBuffer(): Promise<ArrayBuffer>;
}

export function proxyUrlFromEnv(): URL | undefined {
    const raw =
        process.env.https_proxy ??
        process.env.HTTPS_PROXY ??
        process.env.http_proxy ??
        process.env.HTTP_PROXY;
    return raw ? new URL(raw) : undefined;
}

/** Returns Node's own fetch when there is no proxy to go through. */
export function makeFetch(
    proxy = proxyUrlFromEnv(),
    timeoutMs = TIMEOUT_MS,
): typeof fetch {
    if (!proxy) return fetch;
    return ((input: RequestInfo | URL, init?: RequestInit) =>
        viaProxy(
            proxy,
            new URL(String(input)),
            init ?? {},
            timeoutMs,
        )) as typeof fetch;
}

async function viaProxy(
    proxy: URL,
    target: URL,
    init: RequestInit,
    timeoutMs: number,
): Promise<MinimalResponse> {
    const port = Number(
        target.port || (target.protocol === "https:" ? 443 : 80),
    );
    const socket =
        target.protocol === "https:"
            ? await connectTunnel(proxy, target.hostname, port, timeoutMs)
            : undefined;

    const body = toBuffer(init.body);
    const headers: Record<string, string> = {
        ...(init.headers as Record<string, string> | undefined),
    };
    if (body) headers["Content-Length"] = String(body.length);

    return new Promise((resolve, reject) => {
        const send = target.protocol === "https:" ? httpsRequest : httpRequest;
        const request = send(
            target.protocol === "https:"
                ? {
                      host: target.hostname,
                      port,
                      path: `${target.pathname}${target.search}`,
                      method: init.method ?? "GET",
                      headers,
                      // No `agent` key at all. `agent: false` makes Node build
                      // a fresh Agent and ignore `createConnection`, which
                      // leaves the request waiting on a socket it never gets.
                      createConnection: () =>
                          tlsConnect({
                              socket,
                              servername: target.hostname,
                          }),
                  }
                : {
                      // Plain HTTP goes to the proxy with an absolute-form
                      // request line.
                      host: proxy.hostname,
                      port: Number(proxy.port || 80),
                      path: target.toString(),
                      method: init.method ?? "GET",
                      headers: { ...headers, Host: target.host },
                  },
            (response) => {
                const chunks: Buffer[] = [];
                response.on("data", (chunk: Buffer) => chunks.push(chunk));
                response.on("end", () => {
                    const payload = Buffer.concat(chunks);
                    const status = response.statusCode ?? 0;
                    resolve({
                        ok: status >= 200 && status < 300,
                        status,
                        statusText: response.statusMessage ?? "",
                        arrayBuffer: async () =>
                            payload.buffer.slice(
                                payload.byteOffset,
                                payload.byteOffset + payload.byteLength,
                            ) as ArrayBuffer,
                    });
                });
            },
        );
        request.setTimeout(timeoutMs, () => {
            request.destroy(
                new Error(
                    `no response from ${target.host} within ${timeoutMs}ms`,
                ),
            );
        });
        request.on("error", reject);
        if (body) request.write(body);
        request.end();
    });
}

function connectTunnel(
    proxy: URL,
    host: string,
    port: number,
    timeoutMs: number,
): Promise<Socket> {
    return new Promise((resolve, reject) => {
        const socket = tcpConnect(
            { host: proxy.hostname, port: Number(proxy.port || 80) },
            () => {
                socket.write(
                    `CONNECT ${host}:${port} HTTP/1.1\r\nHost: ${host}:${port}\r\n\r\n`,
                );
            },
        );
        socket.setTimeout(timeoutMs, () => {
            socket.destroy();
            reject(
                new Error(
                    `proxy did not answer CONNECT ${host}:${port} in ${timeoutMs}ms`,
                ),
            );
        });
        socket.once("error", reject);
        socket.once("data", (chunk: Buffer) => {
            const statusLine = chunk.toString("latin1").split("\r\n")[0];
            if (/ 2\d\d /.test(statusLine)) {
                socket.setTimeout(0);
                socket.removeListener("error", reject);
                resolve(socket);
            } else {
                socket.destroy();
                reject(
                    new Error(
                        `proxy refused CONNECT ${host}:${port} — ${statusLine}`,
                    ),
                );
            }
        });
    });
}

function toBuffer(body: BodyInit | null | undefined): Buffer | undefined {
    if (body == null) return undefined;
    if (body instanceof ArrayBuffer) return Buffer.from(body);
    if (ArrayBuffer.isView(body)) {
        return Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    }
    if (typeof body === "string") return Buffer.from(body, "utf8");
    throw new Error(
        `unsupported request body: ${Object.prototype.toString.call(body)}`,
    );
}
