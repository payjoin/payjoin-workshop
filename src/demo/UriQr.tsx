import { useEffect, useState } from "react";
import QRCode from "qrcode";

/**
 * The BIP 21 URI as a scannable code. In live mode this is a real session on
 * the public directory server, so an external wallet that supports BIP 77 can
 * scan it and take the sender's role instead of the in-page wallet.
 */
export function UriQr({ uri }: { uri: string }) {
    const [dataUrl, setDataUrl] = useState<string | null>(null);

    useEffect(() => {
        let stale = false;
        QRCode.toDataURL(uri, { margin: 1, width: 208 })
            .then((url) => {
                if (!stale) setDataUrl(url);
            })
            .catch(() => {
                if (!stale) setDataUrl(null);
            });
        return () => {
            stale = true;
        };
    }, [uri]);

    if (!dataUrl) return null;
    return (
        <img
            src={dataUrl}
            alt="The BIP 21 payjoin URI as a QR code"
            className="w-52 h-52 rounded-lg self-center"
        />
    );
}
