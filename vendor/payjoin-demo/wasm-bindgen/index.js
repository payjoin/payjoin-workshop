/* @ts-self-types="./index.d.ts" */

export class ForeignFutureCompleteF32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteF32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletef32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteF32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteF32);
        wasm.foreignfuturecompletef32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteF32.prototype[Symbol.dispose] = ForeignFutureCompleteF32.prototype.free;

export class ForeignFutureCompleteF64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteF64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletef64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteF64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteF64);
        wasm.foreignfuturecompletef64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteF64.prototype[Symbol.dispose] = ForeignFutureCompleteF64.prototype.free;

export class ForeignFutureCompleteI16 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI16Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei16_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI16} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI16);
        wasm.foreignfuturecompletei16_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI16.prototype[Symbol.dispose] = ForeignFutureCompleteI16.prototype.free;

export class ForeignFutureCompleteI32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI32);
        wasm.foreignfuturecompletei32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI32.prototype[Symbol.dispose] = ForeignFutureCompleteI32.prototype.free;

export class ForeignFutureCompleteI64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI64);
        wasm.foreignfuturecompletei64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI64.prototype[Symbol.dispose] = ForeignFutureCompleteI64.prototype.free;

export class ForeignFutureCompleteI8 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI8Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei8_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI8} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI8);
        wasm.foreignfuturecompletei8_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI8.prototype[Symbol.dispose] = ForeignFutureCompleteI8.prototype.free;

export class ForeignFutureCompleteRustBuffer {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ForeignFutureCompleteRustBuffer.prototype);
        obj.__wbg_ptr = ptr;
        ForeignFutureCompleteRustBufferFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteRustBufferFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleterustbuffer_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteRustBuffer} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteRustBuffer);
        wasm.foreignfuturecompleterustbuffer_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteRustBuffer.prototype[Symbol.dispose] = ForeignFutureCompleteRustBuffer.prototype.free;

export class ForeignFutureCompleteU16 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU16Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu16_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU16} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU16);
        wasm.foreignfuturecompleteu16_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU16.prototype[Symbol.dispose] = ForeignFutureCompleteU16.prototype.free;

export class ForeignFutureCompleteU32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU32);
        wasm.foreignfuturecompleteu32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU32.prototype[Symbol.dispose] = ForeignFutureCompleteU32.prototype.free;

export class ForeignFutureCompleteU64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU64);
        wasm.foreignfuturecompleteu64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU64.prototype[Symbol.dispose] = ForeignFutureCompleteU64.prototype.free;

export class ForeignFutureCompleteU8 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU8Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu8_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU8} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU8);
        wasm.foreignfuturecompleteu8_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU8.prototype[Symbol.dispose] = ForeignFutureCompleteU8.prototype.free;

export class ForeignFutureCompleteVoid {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ForeignFutureCompleteVoid.prototype);
        obj.__wbg_ptr = ptr;
        ForeignFutureCompleteVoidFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteVoidFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletevoid_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteVoid} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteVoid);
        wasm.foreignfuturecompletevoid_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteVoid.prototype[Symbol.dispose] = ForeignFutureCompleteVoid.prototype.free;

export class RustCallStatus {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RustCallStatusFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rustcallstatus_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get code() {
        const ret = wasm.__wbg_get_rustcallstatus_code(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array | undefined}
     */
    get errorBuf() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.rustcallstatus_error_buf(ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    constructor() {
        const ret = wasm.rustcallstatus_new();
        this.__wbg_ptr = ret >>> 0;
        RustCallStatusFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array | null} [bytes]
     */
    set errorBuf(bytes) {
        var ptr0 = isLikeNone(bytes) ? 0 : passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rustcallstatus_set_error_buf(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {number} arg0
     */
    set code(arg0) {
        wasm.__wbg_set_rustcallstatus_code(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RustCallStatus.prototype[Symbol.dispose] = RustCallStatus.prototype.free;

/**
 * @returns {number}
 */
export function ubrn_ffi_payjoin_demo_wallet_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_payjoin_demo_wallet_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_f32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_f64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_i16(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_i32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_i64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_i8(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_rust_buffer(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_u16(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_u32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_u64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_u8(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_cancel_void(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_cancel_void(handle);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_f32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_f32(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_f64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_f64(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_i16(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_i16(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_i32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_i32(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_i64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_i64(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_i8(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_i8(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_rust_buffer(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_rust_buffer(handle, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_u16(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_u16(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_u32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_u32(handle, f_status_.__wbg_ptr);
    return ret >>> 0;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_u64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_u64(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_u8(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_u8(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_ffi_payjoin_ffi_rust_future_complete_void(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_ffi_payjoin_ffi_rust_future_complete_void(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_f32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_f64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_i16(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_i32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_i64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_i8(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_rust_buffer(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_u16(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_u32(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_u64(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_u8(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_payjoin_ffi_rust_future_free_void(handle) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_free_void(handle);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_f32(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_f32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_f64(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_f64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_i16(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_i16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_i32(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_i32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_i64(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_i64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_i8(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_i8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_u16(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_u16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_u32(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_u32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_u64(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_u64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_u8(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_u8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_payjoin_ffi_rust_future_poll_void(handle, callback, callback_data) {
    wasm.ubrn_ffi_payjoin_ffi_rust_future_poll_void(handle, callback, callback_data);
}

/**
 * @returns {number}
 */
export function ubrn_ffi_payjoin_ffi_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_payjoin_ffi_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_constructor_demowallets_embedded() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_constructor_demowallets_embedded();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_constructor_demowallets_from_json() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_constructor_demowallets_from_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_address() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_address();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_balance_sat() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_balance_sat();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_build_original_psbt() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_build_original_psbt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_change_address() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_change_address();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_list_unspent() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_list_unspent();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_owns_script() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_owns_script();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_party() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_party();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_sign_and_finalize() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallet_sign_and_finalize();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_amount_bounds() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_amount_bounds();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_extract_tx() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_extract_tx();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_receiver() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_receiver();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_sender() {
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_checksum_method_demowallets_sender();
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_clone_demowallet(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_clone_demowallet(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_clone_demowallets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_clone_demowallets(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_constructor_demowallets_embedded(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_constructor_demowallets_embedded(f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} json
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_constructor_demowallets_from_json(json, f_status_) {
    const ptr0 = passArray8ToWasm0(json, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_constructor_demowallets_from_json(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_free_demowallet(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_demo_wallet_fn_free_demowallet(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_free_demowallets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_demo_wallet_fn_free_demowallets(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_address(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_address(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_balance_sat(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_balance_sat(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} to
 * @param {bigint} amount_sat
 * @param {bigint} fee_rate_sat_per_vb
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_build_original_psbt(ptr, to, amount_sat, fee_rate_sat_per_vb, f_status_) {
    const ptr0 = passArray8ToWasm0(to, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_build_original_psbt(ptr, ptr0, len0, amount_sat, fee_rate_sat_per_vb, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_change_address(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_change_address(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_list_unspent(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_list_unspent(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} script_pubkey
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_owns_script(ptr, script_pubkey, f_status_) {
    const ptr0 = passArray8ToWasm0(script_pubkey, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_owns_script(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_party(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_party(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} psbt_base64
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_sign_and_finalize(ptr, psbt_base64, f_status_) {
    const ptr0 = passArray8ToWasm0(psbt_base64, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallet_sign_and_finalize(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_amount_bounds(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_amount_bounds(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} psbt_base64
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_extract_tx(ptr, psbt_base64, f_status_) {
    const ptr0 = passArray8ToWasm0(psbt_base64, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_extract_tx(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_receiver(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_receiver(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_sender(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_demo_wallet_fn_method_demowallets_sender(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_inputpair_new() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_inputpair_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_ohttpkeys_decode() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_ohttpkeys_decode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_receiverbuilder_new() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_receiverbuilder_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_receiversessionevent_from_json() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_receiversessionevent_from_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_senderbuilder_new() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_senderbuilder_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_sendersessionevent_from_json() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_sendersessionevent_from_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_uri_parse() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_uri_parse();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_constructor_url_parse() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_constructor_url_parse();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_func_replay_receiver_event_log() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_func_replay_receiver_event_log();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_func_replay_receiver_event_log_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_func_replay_receiver_event_log_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_func_replay_sender_event_log() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_func_replay_sender_event_log();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_func_replay_sender_event_log_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_func_replay_sender_event_log_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_assumeinteractivetransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_assumeinteractivetransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_assumeinteractivetransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_assumeinteractivetransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_broadcastedtransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_broadcastedtransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_broadcastedtransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_broadcastedtransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_canbroadcast_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_canbroadcast_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_canceltransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_canceltransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_canceltransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_canceltransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_createrequesterror_is_expired() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_createrequesterror_is_expired();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_create_error_request() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_create_error_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_process_error_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerror_process_error_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerrortransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerrortransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerrortransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_hasreplyableerrortransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialized_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialized_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialized_create_poll_request() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialized_create_poll_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialized_pj_uri() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialized_pj_uri();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialized_process_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialized_process_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initializedtransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initializedtransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initializedtransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initializedtransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialreceivetransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialreceivetransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialreceivetransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialreceivetransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialsendtransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialsendtransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_initialsendtransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_initialsendtransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_inputpair_outpoint() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_inputpair_outpoint();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_isinputowned_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_isinputowned_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_isoutputknown_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_isoutputknown_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_isscriptowned_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_isscriptowned_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_load() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_load();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersister_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_load() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_load();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonreceiversessionpersisterasync_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_load() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_load();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersister_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_load() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_load();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_jsonsendersessionpersisterasync_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_check_inputs_not_owned() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_check_inputs_not_owned();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_extract_tx_to_schedule_broadcast() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_extract_tx_to_schedule_broadcast();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsowned_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsownedtransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsownedtransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsownedtransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsownedtransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_check_no_inputs_seen_before() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_check_no_inputs_seen_before();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseen_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseentransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseentransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseentransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_maybeinputsseentransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_monitor_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_monitor_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_monitor_check_for_transaction() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_monitor_check_for_transaction();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_monitor_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_monitor_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_monitortransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_monitortransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_monitortransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_monitortransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_identify_receiver_outputs() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_identify_receiver_outputs();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknown_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknowntransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknowntransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknowntransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_outputsunknowntransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_create_post_request() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_create_post_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_process_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_process_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_psbt() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposal_psbt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposaltransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposaltransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposaltransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_payjoinproposaltransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pendingfallbacktransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pendingfallbacktransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pendingfallbacktransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pendingfallbacktransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjparam_receiver_pubkey() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjparam_receiver_pubkey();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_address() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_address();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_amount_sats() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_amount_sats();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_as_string() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_as_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_pj_endpoint() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_pj_endpoint();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_set_amount_sats() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pjuri_set_amount_sats();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_create_poll_request() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_create_poll_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_process_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposal_process_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposaltransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposaltransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposaltransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_pollingforproposaltransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_processpsbt_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_processpsbt_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_finalize_proposal() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_finalize_proposal();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_psbt_to_sign() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposal_psbt_to_sign();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposaltransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposaltransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposaltransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_provisionalproposaltransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_build() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_build();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_amount() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_amount();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_expiration() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_expiration();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_max_fee_rate() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverbuilder_with_max_fee_rate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receivercreaterequesterror_is_expired() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receivercreaterequesterror_is_expired();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverpendingfallback_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverpendingfallback_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverpendingfallback_fallback_tx() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverpendingfallback_fallback_tx();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiverreplayerror_is_expired() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiverreplayerror_is_expired();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionevent_to_json() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionevent_to_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_fallback_tx() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_fallback_tx();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_pj_uri() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_pj_uri();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_status() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_receiversessionhistory_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_replayresult_session_history() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_replayresult_session_history();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_replayresult_state() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_replayresult_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_always_disable_output_substitution() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_always_disable_output_substitution();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_non_incentivizing() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_non_incentivizing();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_recommended() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_recommended();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_with_additional_fee() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderbuilder_build_with_additional_fee();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendercanceltransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendercanceltransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendercanceltransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendercanceltransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderpendingfallback_close() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderpendingfallback_close();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderpendingfallback_fallback_tx() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderpendingfallback_fallback_tx();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayerror_is_expired() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayerror_is_expired();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayresult_session_history() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayresult_session_history();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayresult_state() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_senderreplayresult_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionevent_to_json() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionevent_to_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_fallback_tx() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_fallback_tx();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_pj_param() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_pj_param();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_status() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionhistory_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_is_aborted() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_is_aborted();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_is_success() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_is_success();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_success_psbt_base64() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_sendersessionoutcome_success_psbt_base64();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_transactionfinder_callback() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_transactionfinder_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_assume_interactive_receiver() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_assume_interactive_receiver();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_check_broadcast_suitability() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayload_check_broadcast_suitability();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayloadtransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayloadtransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayloadtransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uncheckedoriginalpayloadtransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_address() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_address();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_amount_sats() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_amount_sats();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_as_string() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_as_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_check_pj_supported() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_check_pj_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_label() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_label();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_uri_message() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_uri_message();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_url_as_string() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_url_as_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_url_query() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_url_query();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_v1context_process_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_v1context_process_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_apply_fee_range() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_apply_fee_range();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerange_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerangetransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerangetransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerangetransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsfeerangetransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_commit_inputs() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_commit_inputs();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_contribute_inputs() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_contribute_inputs();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_try_preserving_privacy() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputs_try_preserving_privacy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputstransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputstransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputstransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsinputstransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_commit_outputs() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_commit_outputs();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_output_substitution() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_output_substitution();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_proposal_txid_is_stable() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_proposal_txid_is_stable();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_replace_receiver_outputs() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_replace_receiver_outputs();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_substitute_receiver_script() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputs_substitute_receiver_script();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputstransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputstransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputstransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wantsoutputstransition_save_async();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_wellknownerror_code() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_wellknownerror_code();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_cancel() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_create_v2_post_request() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_create_v2_post_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_process_response() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_withreplykey_process_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_withreplykeytransition_save() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_withreplykeytransition_save();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_checksum_method_withreplykeytransition_save_async() {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_checksum_method_withreplykeytransition_save_async();
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_addressparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_addressparseerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_assumeinteractivetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_assumeinteractivetransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_broadcastedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_broadcastedtransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_canbroadcast(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_canbroadcast(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_canceltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_canceltransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_clientresponse(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_clientresponse(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_coinselectionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_coinselectionerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_createrequesterror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_createrequesterror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_decapsulationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_decapsulationerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_feerateerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_feerateerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_hasreplyableerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_hasreplyableerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_hasreplyableerrortransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_hasreplyableerrortransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_implementationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_implementationerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_initialized(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_initialized(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_initializedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_initializedtransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_initialreceivetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_initialreceivetransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_initialsendtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_initialsendtransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_inputcontributionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_inputcontributionerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_inputpair(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_inputpair(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_intourlerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_intourlerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_isinputowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_isinputowned(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_isoutputknown(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_isoutputknown(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_isscriptowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_isscriptowned(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_jsonreceiversessionpersister(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_jsonreceiversessionpersister(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_jsonreceiversessionpersisterasync(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_jsonreceiversessionpersisterasync(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_jsonreply(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_jsonreply(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_jsonsendersessionpersister(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_jsonsendersessionpersister(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_jsonsendersessionpersisterasync(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_jsonsendersessionpersisterasync(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsowned(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsownedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsownedtransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsseen(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsseen(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsseentransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_maybeinputsseentransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_monitor(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_monitor(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_monitortransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_monitortransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_ohttperror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_ohttperror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_ohttpkeys(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_ohttpkeys(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_outputsubstitutionprotocolerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_outputsubstitutionprotocolerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_outputsunknown(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_outputsunknown(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_outputsunknowntransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_outputsunknowntransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_payjoinproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_payjoinproposal(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_payjoinproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_payjoinproposaltransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pendingfallbacktransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pendingfallbacktransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pjnotsupported(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pjnotsupported(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pjparam(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pjparam(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pjuri(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pjuri(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pollingforproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pollingforproposal(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_pollingforproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_pollingforproposaltransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_processpsbt(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_processpsbt(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_protocolerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_protocolerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_provisionalproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_provisionalproposal(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_provisionalproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_provisionalproposaltransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_psbtinputerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_psbtinputerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiverbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiverbuilder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receivercreaterequesterror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receivercreaterequesterror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiverpendingfallback(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiverpendingfallback(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiverreplayerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiverreplayerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionevent(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionhistory(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionhistory(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionoutcome(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionoutcome(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionstatus(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_receiversessionstatus(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_replayresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_replayresult(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_senderbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_senderbuilder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_senderbuildererror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_senderbuildererror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sendercanceltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sendercanceltransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_senderpendingfallback(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_senderpendingfallback(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_senderreplayerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_senderreplayerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_senderreplayresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_senderreplayresult(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionevent(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionhistory(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionhistory(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionoutcome(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionoutcome(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionstatus(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sendersessionstatus(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_serdejsonerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_serdejsonerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_sessionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_sessionerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_transactionfinder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_transactionfinder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_uncheckedoriginalpayload(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_uncheckedoriginalpayload(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_uncheckedoriginalpayloadtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_uncheckedoriginalpayloadtransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_uri(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_uri(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_uriparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_uriparseerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_url(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_url(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_urlparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_urlparseerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_v1context(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_v1context(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_validationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_validationerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsfeerange(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsfeerange(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsfeerangetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsfeerangetransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsinputs(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsinputs(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsinputstransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsinputstransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsoutputs(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsoutputs(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wantsoutputstransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wantsoutputstransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_wellknownerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_wellknownerror(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_withreplykey(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_withreplykey(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_clone_withreplykeytransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_clone_withreplykeytransition(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} txin
 * @param {Uint8Array} psbtin
 * @param {Uint8Array} expected_weight
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_inputpair_new(txin, psbtin, expected_weight, f_status_) {
    const ptr0 = passArray8ToWasm0(txin, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(psbtin, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(expected_weight, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_inputpair_new(ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} bytes
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_ohttpkeys_decode(bytes, f_status_) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_ohttpkeys_decode(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} address
 * @param {Uint8Array} directory
 * @param {bigint} ohttp_keys
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_receiverbuilder_new(address, directory, ohttp_keys, f_status_) {
    const ptr0 = passArray8ToWasm0(address, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(directory, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_receiverbuilder_new(ptr0, len0, ptr1, len1, ohttp_keys, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} json
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_receiversessionevent_from_json(json, f_status_) {
    const ptr0 = passArray8ToWasm0(json, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_receiversessionevent_from_json(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} psbt
 * @param {bigint} uri
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_senderbuilder_new(psbt, uri, f_status_) {
    const ptr0 = passArray8ToWasm0(psbt, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_senderbuilder_new(ptr0, len0, uri, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} json
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_sendersessionevent_from_json(json, f_status_) {
    const ptr0 = passArray8ToWasm0(json, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_sendersessionevent_from_json(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} uri
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_uri_parse(uri, f_status_) {
    const ptr0 = passArray8ToWasm0(uri, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_uri_parse(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} input
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_constructor_url_parse(input, f_status_) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_constructor_url_parse(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_addressparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_addressparseerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_assumeinteractivetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_assumeinteractivetransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_broadcastedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_broadcastedtransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_canbroadcast(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_canbroadcast(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_canceltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_canceltransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_clientresponse(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_clientresponse(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_coinselectionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_coinselectionerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_createrequesterror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_createrequesterror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_decapsulationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_decapsulationerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_feerateerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_feerateerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_hasreplyableerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_hasreplyableerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_hasreplyableerrortransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_hasreplyableerrortransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_implementationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_implementationerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_initialized(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_initialized(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_initializedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_initializedtransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_initialreceivetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_initialreceivetransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_initialsendtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_initialsendtransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_inputcontributionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_inputcontributionerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_inputpair(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_inputpair(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_intourlerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_intourlerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_isinputowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_isinputowned(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_isoutputknown(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_isoutputknown(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_isscriptowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_isscriptowned(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_jsonreceiversessionpersister(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_jsonreceiversessionpersister(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_jsonreceiversessionpersisterasync(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_jsonreceiversessionpersisterasync(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_jsonreply(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_jsonreply(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_jsonsendersessionpersister(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_jsonsendersessionpersister(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_jsonsendersessionpersisterasync(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_jsonsendersessionpersisterasync(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsowned(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsowned(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsownedtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsownedtransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsseen(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsseen(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsseentransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_maybeinputsseentransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_monitor(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_monitor(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_monitortransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_monitortransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_ohttperror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_ohttperror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_ohttpkeys(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_ohttpkeys(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_outputsubstitutionprotocolerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_outputsubstitutionprotocolerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_outputsunknown(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_outputsunknown(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_outputsunknowntransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_outputsunknowntransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_payjoinproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_payjoinproposal(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_payjoinproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_payjoinproposaltransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pendingfallbacktransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pendingfallbacktransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pjnotsupported(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pjnotsupported(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pjparam(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pjparam(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pjuri(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pjuri(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pollingforproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pollingforproposal(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_pollingforproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_pollingforproposaltransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_processpsbt(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_processpsbt(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_protocolerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_protocolerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_provisionalproposal(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_provisionalproposal(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_provisionalproposaltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_provisionalproposaltransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_psbtinputerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_psbtinputerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiverbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiverbuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receivercreaterequesterror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receivercreaterequesterror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiverpendingfallback(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiverpendingfallback(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiverreplayerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiverreplayerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiversessionevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiversessionevent(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiversessionhistory(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiversessionhistory(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiversessionoutcome(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiversessionoutcome(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_receiversessionstatus(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_receiversessionstatus(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_replayresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_replayresult(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_senderbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_senderbuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_senderbuildererror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_senderbuildererror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sendercanceltransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sendercanceltransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_senderpendingfallback(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_senderpendingfallback(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_senderreplayerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_senderreplayerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_senderreplayresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_senderreplayresult(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sendersessionevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sendersessionevent(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sendersessionhistory(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sendersessionhistory(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sendersessionoutcome(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sendersessionoutcome(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sendersessionstatus(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sendersessionstatus(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_serdejsonerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_serdejsonerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_sessionerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_sessionerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_transactionfinder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_transactionfinder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_uncheckedoriginalpayload(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_uncheckedoriginalpayload(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_uncheckedoriginalpayloadtransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_uncheckedoriginalpayloadtransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_uri(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_uri(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_uriparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_uriparseerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_url(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_url(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_urlparseerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_urlparseerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_v1context(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_v1context(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_validationerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_validationerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsfeerange(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsfeerange(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsfeerangetransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsfeerangetransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsinputs(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsinputs(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsinputstransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsinputstransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsoutputs(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsoutputs(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wantsoutputstransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wantsoutputstransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_wellknownerror(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_wellknownerror(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_withreplykey(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_withreplykey(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_free_withreplykeytransition(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_free_withreplykeytransition(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_func_replay_receiver_event_log(persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_func_replay_receiver_event_log(persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_func_replay_receiver_event_log_async(persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_func_replay_receiver_event_log_async(persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_func_replay_sender_event_log(persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_func_replay_sender_event_log(persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_func_replay_sender_event_log_async(persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_func_replay_sender_event_log_async(persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_canbroadcast(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_canbroadcast(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isinputowned(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isinputowned(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isoutputknown(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isoutputknown(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isscriptowned(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_isscriptowned(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonreceiversessionpersister(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonreceiversessionpersister(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonreceiversessionpersisterasync(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonreceiversessionpersisterasync(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonsendersessionpersister(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonsendersessionpersister(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonsendersessionpersisterasync(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_jsonsendersessionpersisterasync(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_processpsbt(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_processpsbt(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_transactionfinder(vtable) {
    wasm.ubrn_uniffi_payjoin_ffi_fn_init_callback_vtable_transactionfinder(vtable);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_addressparseerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_addressparseerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_addressparseerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_addressparseerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_assumeinteractivetransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_assumeinteractivetransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_assumeinteractivetransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_assumeinteractivetransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_broadcastedtransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_broadcastedtransition_save(ptr, persister, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_broadcastedtransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_broadcastedtransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} tx
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_canbroadcast_callback(ptr, tx, f_status_) {
    const ptr0 = passArray8ToWasm0(tx, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_canbroadcast_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_canceltransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_canceltransition_save(ptr, persister, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_canceltransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_canceltransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_coinselectionerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_coinselectionerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_coinselectionerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_coinselectionerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_is_expired(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_is_expired(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_createrequesterror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_decapsulationerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_decapsulationerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_decapsulationerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_decapsulationerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_feerateerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_feerateerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_feerateerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_feerateerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} ohttp_relay
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_create_error_request(ptr, ohttp_relay, f_status_) {
    const ptr0 = passArray8ToWasm0(ohttp_relay, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_create_error_request(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} body
 * @param {bigint} ohttp_context
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_process_error_response(ptr, body, ohttp_context, f_status_) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerror_process_error_response(ptr, ptr0, len0, ohttp_context, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerrortransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerrortransition_save(ptr, persister, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerrortransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_hasreplyableerrortransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_implementationerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_implementationerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_implementationerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_implementationerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialized_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialized_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} ohttp_relay
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialized_create_poll_request(ptr, ohttp_relay, f_status_) {
    const ptr0 = passArray8ToWasm0(ohttp_relay, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialized_create_poll_request(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialized_pj_uri(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialized_pj_uri(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} body
 * @param {bigint} ctx
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialized_process_response(ptr, body, ctx, f_status_) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialized_process_response(ptr, ptr0, len0, ctx, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initializedtransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initializedtransition_save(ptr, persister, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initializedtransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initializedtransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialreceivetransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialreceivetransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialreceivetransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialreceivetransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialsendtransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialsendtransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_initialsendtransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_initialsendtransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_inputcontributionerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_inputcontributionerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_inputcontributionerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_inputcontributionerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_inputpair_outpoint(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_inputpair_outpoint(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_intourlerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_intourlerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_intourlerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_intourlerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} outpoint
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_isinputowned_callback(ptr, outpoint, f_status_) {
    const ptr0 = passArray8ToWasm0(outpoint, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_isinputowned_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} outpoint
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_isoutputknown_callback(ptr, outpoint, f_status_) {
    const ptr0 = passArray8ToWasm0(outpoint, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_isoutputknown_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} script
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_isscriptowned_callback(ptr, script, f_status_) {
    const ptr0 = passArray8ToWasm0(script, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_isscriptowned_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_close(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_close(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_load(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_load(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_save(ptr, event, f_status_) {
    const ptr0 = passArray8ToWasm0(event, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersister_save(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_close(ptr) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_close(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_load(ptr) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_load(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_save(ptr, event) {
    const ptr0 = passArray8ToWasm0(event, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreceiversessionpersisterasync_save(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_eq_eq(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_eq_eq(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_eq_ne(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonreply_uniffi_trait_eq_ne(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_close(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_close(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_load(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_load(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_save(ptr, event, f_status_) {
    const ptr0 = passArray8ToWasm0(event, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersister_save(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_close(ptr) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_close(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_load(ptr) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_load(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_save(ptr, event) {
    const ptr0 = passArray8ToWasm0(event, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_jsonsendersessionpersisterasync_save(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} is_owned
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_check_inputs_not_owned(ptr, is_owned, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_check_inputs_not_owned(ptr, is_owned, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_extract_tx_to_schedule_broadcast(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_extract_tx_to_schedule_broadcast(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsowned_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsownedtransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsownedtransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsownedtransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsownedtransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} is_known
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_check_no_inputs_seen_before(ptr, is_known, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_check_no_inputs_seen_before(ptr, is_known, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseen_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseentransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseentransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseentransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_maybeinputsseentransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_monitor_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_monitor_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} find_transaction
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_monitor_check_for_transaction(ptr, find_transaction, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_monitor_check_for_transaction(ptr, find_transaction, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_monitor_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_monitor_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_monitortransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_monitortransition_save(ptr, persister, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_monitortransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_monitortransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_ohttperror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_ohttperror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_ohttperror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_ohttperror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsubstitutionprotocolerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsubstitutionprotocolerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsubstitutionprotocolerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsubstitutionprotocolerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} is_receiver_output
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_identify_receiver_outputs(ptr, is_receiver_output, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_identify_receiver_outputs(ptr, is_receiver_output, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsunknown_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsunknowntransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsunknowntransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_outputsunknowntransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_outputsunknowntransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} ohttp_relay
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_create_post_request(ptr, ohttp_relay, f_status_) {
    const ptr0 = passArray8ToWasm0(ohttp_relay, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_create_post_request(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} body
 * @param {bigint} ohttp_context
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_process_response(ptr, body, ohttp_context, f_status_) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_process_response(ptr, ptr0, len0, ohttp_context, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_psbt(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposal_psbt(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposaltransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposaltransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposaltransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_payjoinproposaltransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pendingfallbacktransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_payjoin_ffi_fn_method_pendingfallbacktransition_save(ptr, persister, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pendingfallbacktransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pendingfallbacktransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_eq_eq(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_eq_eq(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_eq_ne(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjnotsupported_uniffi_trait_eq_ne(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjparam_receiver_pubkey(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjparam_receiver_pubkey(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjuri_address(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjuri_address(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjuri_amount_sats(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjuri_amount_sats(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjuri_as_string(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjuri_as_string(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjuri_pj_endpoint(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjuri_pj_endpoint(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} amount_sats
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pjuri_set_amount_sats(ptr, amount_sats, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pjuri_set_amount_sats(ptr, amount_sats, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} ohttp_relay
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_create_poll_request(ptr, ohttp_relay, f_status_) {
    const ptr0 = passArray8ToWasm0(ohttp_relay, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_create_poll_request(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} response
 * @param {bigint} ohttp_ctx
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_process_response(ptr, response, ohttp_ctx, f_status_) {
    const ptr0 = passArray8ToWasm0(response, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposal_process_response(ptr, ptr0, len0, ohttp_ctx, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposaltransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposaltransition_save(ptr, persister, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposaltransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_pollingforproposaltransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} psbt
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_processpsbt_callback(ptr, psbt, f_status_) {
    const ptr0 = passArray8ToWasm0(psbt, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_processpsbt_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_protocolerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_protocolerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_protocolerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_protocolerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} process_psbt
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_finalize_proposal(ptr, process_psbt, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_finalize_proposal(ptr, process_psbt, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_psbt_to_sign(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposal_psbt_to_sign(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposaltransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposaltransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposaltransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_provisionalproposaltransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_psbtinputerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_psbtinputerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_psbtinputerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_psbtinputerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_build(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_build(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} amount_sats
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_amount(ptr, amount_sats, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_amount(ptr, amount_sats, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} expiration_secs
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_expiration(ptr, expiration_secs, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_expiration(ptr, expiration_secs, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} max_effective_fee_rate_sat_per_vb
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_max_fee_rate(ptr, max_effective_fee_rate_sat_per_vb, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverbuilder_with_max_fee_rate(ptr, max_effective_fee_rate_sat_per_vb, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_is_expired(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_is_expired(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receivercreaterequesterror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverpendingfallback_close(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverpendingfallback_close(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverpendingfallback_fallback_tx(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverpendingfallback_fallback_tx(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_is_expired(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_is_expired(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiverreplayerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiversessionevent_to_json(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiversessionevent_to_json(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_fallback_tx(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_fallback_tx(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_pj_uri(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_pj_uri(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_status(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_receiversessionhistory_status(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_replayresult_session_history(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_replayresult_session_history(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_replayresult_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_replayresult_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_always_disable_output_substitution(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_always_disable_output_substitution(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} min_fee_rate_sat_per_kwu
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_non_incentivizing(ptr, min_fee_rate_sat_per_kwu, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_non_incentivizing(ptr, min_fee_rate_sat_per_kwu, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} min_fee_rate_sat_per_kwu
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_recommended(ptr, min_fee_rate_sat_per_kwu, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_recommended(ptr, min_fee_rate_sat_per_kwu, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} max_fee_contribution_sats
 * @param {Uint8Array} change_index
 * @param {bigint} min_fee_rate_sat_per_kwu
 * @param {number} clamp_fee_contribution
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_with_additional_fee(ptr, max_fee_contribution_sats, change_index, min_fee_rate_sat_per_kwu, clamp_fee_contribution, f_status_) {
    const ptr0 = passArray8ToWasm0(change_index, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuilder_build_with_additional_fee(ptr, max_fee_contribution_sats, ptr0, len0, min_fee_rate_sat_per_kwu, clamp_fee_contribution, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_eq_eq(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_eq_eq(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_eq_ne(ptr, other, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderbuildererror_uniffi_trait_eq_ne(ptr, other, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendercanceltransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendercanceltransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendercanceltransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendercanceltransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderpendingfallback_close(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderpendingfallback_close(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderpendingfallback_fallback_tx(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderpendingfallback_fallback_tx(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_is_expired(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_is_expired(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderreplayerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderreplayresult_session_history(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderreplayresult_session_history(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_senderreplayresult_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_senderreplayresult_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionevent_to_json(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionevent_to_json(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_fallback_tx(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_fallback_tx(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_pj_param(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_pj_param(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_status(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionhistory_status(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_is_aborted(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_is_aborted(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_is_success(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_is_success(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_success_psbt_base64(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sendersessionoutcome_success_psbt_base64(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_serdejsonerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_serdejsonerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_serdejsonerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_serdejsonerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sessionerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sessionerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_sessionerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_sessionerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} txid
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_transactionfinder_callback(ptr, txid, f_status_) {
    const ptr0 = passArray8ToWasm0(txid, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_transactionfinder_callback(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_assume_interactive_receiver(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_assume_interactive_receiver(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} min_fee_rate_sat_per_kwu
 * @param {bigint} can_broadcast
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_check_broadcast_suitability(ptr, min_fee_rate_sat_per_kwu, can_broadcast, f_status_) {
    const ptr0 = passArray8ToWasm0(min_fee_rate_sat_per_kwu, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayload_check_broadcast_suitability(ptr, ptr0, len0, can_broadcast, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayloadtransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayloadtransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayloadtransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uncheckedoriginalpayloadtransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_address(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_address(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_amount_sats(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_amount_sats(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_as_string(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_as_string(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_check_pj_supported(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_check_pj_supported(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_label(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_label(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uri_message(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uri_message(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uriparseerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uriparseerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_uriparseerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_uriparseerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_url_as_string(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_url_as_string(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_url_query(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_url_query(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_urlparseerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_urlparseerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_urlparseerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_urlparseerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} response
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_v1context_process_response(ptr, response, f_status_) {
    const ptr0 = passArray8ToWasm0(response, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_v1context_process_response(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_validationerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_validationerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_validationerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_validationerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} min_fee_rate_sat_per_vb
 * @param {Uint8Array} max_effective_fee_rate_sat_per_vb
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_apply_fee_range(ptr, min_fee_rate_sat_per_vb, max_effective_fee_rate_sat_per_vb, f_status_) {
    const ptr0 = passArray8ToWasm0(min_fee_rate_sat_per_vb, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(max_effective_fee_rate_sat_per_vb, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_apply_fee_range(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerange_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerangetransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerangetransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerangetransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsfeerangetransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_commit_inputs(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_commit_inputs(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} replacement_inputs
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_contribute_inputs(ptr, replacement_inputs, f_status_) {
    const ptr0 = passArray8ToWasm0(replacement_inputs, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_contribute_inputs(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} candidate_inputs
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_try_preserving_privacy(ptr, candidate_inputs, f_status_) {
    const ptr0 = passArray8ToWasm0(candidate_inputs, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputs_try_preserving_privacy(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputstransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputstransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsinputstransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsinputstransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_commit_outputs(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_commit_outputs(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_output_substitution(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_output_substitution(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_proposal_txid_is_stable(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_proposal_txid_is_stable(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} replacement_outputs
 * @param {Uint8Array} drain_script_pubkey
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_replace_receiver_outputs(ptr, replacement_outputs, drain_script_pubkey, f_status_) {
    const ptr0 = passArray8ToWasm0(replacement_outputs, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(drain_script_pubkey, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_replace_receiver_outputs(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} output_script_pubkey
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_substitute_receiver_script(ptr, output_script_pubkey, f_status_) {
    const ptr0 = passArray8ToWasm0(output_script_pubkey, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputs_substitute_receiver_script(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputstransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputstransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputstransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wantsoutputstransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_code(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_code(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_uniffi_trait_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_uniffi_trait_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_uniffi_trait_display(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_wellknownerror_uniffi_trait_display(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_cancel(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} ohttp_relay
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_create_v2_post_request(ptr, ohttp_relay, f_status_) {
    const ptr0 = passArray8ToWasm0(ohttp_relay, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_create_v2_post_request(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} response
 * @param {bigint} post_ctx
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_process_response(ptr, response, post_ctx, f_status_) {
    const ptr0 = passArray8ToWasm0(response, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_withreplykey_process_response(ptr, ptr0, len0, post_ctx, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_withreplykeytransition_save(ptr, persister, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_withreplykeytransition_save(ptr, persister, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} persister
 * @returns {bigint}
 */
export function ubrn_uniffi_payjoin_ffi_fn_method_withreplykeytransition_save_async(ptr, persister) {
    const ret = wasm.ubrn_uniffi_payjoin_ffi_fn_method_withreplykeytransition_save_async(ptr, persister);
    return BigInt.asUintN(64, ret);
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_is_function_0095a73b8b156f76: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_cd444516edc5b180: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_015cec0d3e74b23b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_0424820c525124d7: function(arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), ForeignFutureCompleteVoid.__wrap(arg3), BigInt.asUintN(64, arg4));
            return ret;
        },
        __wbg_call_058bfce9f56887ec: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0d02442536f8c513: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0e93f89d33176649: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0f2a069b8dd767a6: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_12e2f13e6bfd0b5b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_13fc21757915850f: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_1c58a7d9443c7c42: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_1d299f6855004b4b: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_1ee8875186543483: function(arg0, arg1, arg2, arg3) {
            arg0.call(arg1, BigInt.asUintN(64, arg2), arg3);
        },
        __wbg_call_2ac31e1d728b26ab: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_2bd1b08c2a186e1d: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_389efe28435a9388: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_38d65f919667e5d7: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_4708e0c13bdc8e95: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_call_4de01b1ef155e875: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_584acf6335c9a9a9: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_625b766487083633: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_682aea1f6b027a82: function(arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), ForeignFutureCompleteVoid.__wrap(arg3), BigInt.asUintN(64, arg4));
            return ret;
        },
        __wbg_call_69ff3c5eafeb4ce0: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, ForeignFutureCompleteVoid.__wrap(arg5), BigInt.asUintN(64, arg6));
            return ret;
        },
        __wbg_call_713f0ea941a76ab1: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_7185a2da946cef62: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_800aa07e8171815a: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_88561db226cbec15: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_994a0a86e55a6eab: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_9a01e3b4b7e956ea: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_a0361d3e5179209c: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b3cfbbbc8ca12a23: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_b63453d254879fda: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b635478c16160ef4: function(arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), ForeignFutureCompleteRustBuffer.__wrap(arg3), BigInt.asUintN(64, arg4));
            return ret;
        },
        __wbg_call_b8bfb87878d4c41f: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_bdf9bbd522cc6737: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_bf16754483d6914e: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_c1ecfa8823fcd49b: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_c69f88d37763f713: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, ForeignFutureCompleteVoid.__wrap(arg5), BigInt.asUintN(64, arg6));
            return ret;
        },
        __wbg_call_d8c9d31f7b959d13: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_db79958f0c675067: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_f1b98b02329c70ba: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_f3984dc802adcaea: function(arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), ForeignFutureCompleteRustBuffer.__wrap(arg3), BigInt.asUintN(64, arg4));
            return ret;
        },
        __wbg_call_f7fab2e2ddb0e560: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_fbe3dd3e8e8d243b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_status_897e68e2fccec2aa: function(arg0) {
            const ret = arg0.call_status;
            _assertClass(ret, RustCallStatus);
            var ptr1 = ret.__destroy_into_raw();
            return ptr1;
        },
        __wbg_callback_0d61ff9dbba8ba62: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_callback_7d13c77024f72620: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_callback_9ea908560357ecaf: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_callback_d04274828b6b36f1: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_callback_d3d444fb639bb20e: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_callback_fde68ebc95311459: function(arg0) {
            const ret = arg0.callback;
            return ret;
        },
        __wbg_close_1fa9f476d352899b: function(arg0) {
            const ret = arg0.close;
            return ret;
        },
        __wbg_close_5b63032a266e71ce: function(arg0) {
            const ret = arg0.close;
            return ret;
        },
        __wbg_close_ad8f6295430a13db: function(arg0) {
            const ret = arg0.close;
            return ret;
        },
        __wbg_close_f967aadbb29ca409: function(arg0) {
            const ret = arg0.close;
            return ret;
        },
        __wbg_code_311edd7fee731116: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_code_40573032d78b6468: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_code_4f712029544de4e3: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_crypto_86f2631e91b51511: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_error_buf_20b1f5fee4ee0b0c: function(arg0, arg1) {
            const ret = arg1.errorBuf;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_error_buf_2b5990877199d592: function(arg0, arg1) {
            const ret = arg1.errorBuf;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_error_buf_7b3420300532b2b1: function(arg0, arg1) {
            const ret = arg1.errorBuf;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_free_e7d9051e9d29c5fe: function(arg0) {
            const ret = arg0.free;
            return ret;
        },
        __wbg_getRandomValues_b3f15fcbfabb0f8b: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_handle_6d411e01f50f330b: function(arg0) {
            const ret = arg0.handle;
            return ret;
        },
        __wbg_length_32ed9a279acd054c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_load_2b6d046a4e7c03cb: function(arg0) {
            const ret = arg0.load;
            return ret;
        },
        __wbg_load_2f21210f90ab6905: function(arg0) {
            const ret = arg0.load;
            return ret;
        },
        __wbg_load_48aefac9e4e87c4f: function(arg0) {
            const ret = arg0.load;
            return ret;
        },
        __wbg_load_b4e967bfcc219394: function(arg0) {
            const ret = arg0.load;
            return ret;
        },
        __wbg_msCrypto_d562bbe83e0d4b91: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_new_no_args_1c7c842f08d00ebb: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_with_length_a2c39cbe88fd8ff1: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_node_e1f24f89a7336c2e: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_now_a3af9a2f4bbaa4d1: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_pointee_2ab65395e08a5b63: function(arg0, arg1) {
            const ret = arg1.pointee;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_pointee_7819f1c48ad32df8: function(arg0) {
            const ret = arg0.pointee;
            return isLikeNone(ret) ? 0xFFFFFF : ret;
        },
        __wbg_process_3975fd6c72f520aa: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_bdcdcc5842e4d77d: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_randomFillSync_f8c153b79f285817: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_require_b74f47fc2d022fd6: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_return_value_0a8aec6d190a7134: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_0d19576f690d7261: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_0defa5e52b9790e8: function(arg0, arg1) {
            const ret = arg1.return_value;
            const ptr1 = passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_return_value_17b1892df4885505: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_1857f644bbbdbffc: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_1f88cc7dbb9b5104: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_3317d7a5dd8f9da5: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_7823618fdff1a671: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_9cbe928697b64630: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_cb90d72a19441170: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_e8adc72ada7526fa: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_save_12a87a87df041355: function(arg0) {
            const ret = arg0.save;
            return ret;
        },
        __wbg_save_42bf37f09b0a12d0: function(arg0) {
            const ret = arg0.save;
            return ret;
        },
        __wbg_save_9d92a28188f5a091: function(arg0) {
            const ret = arg0.save;
            return ret;
        },
        __wbg_save_bab98a97257b532a: function(arg0) {
            const ret = arg0.save;
            return ret;
        },
        __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subarray_a96e1fef17ed23cb: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_uniffi_clone_193eddd35b182a50: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_3316b6968cda727d: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_3a58e3fcf76ea3c1: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_450a00cab65feb9d: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_48498f3d984d29c3: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_4bce26b3ceec46bb: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_65cb74b3c2bf51ac: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_7fa81fe94991fed7: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_81d46315f9de1abc: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_e78e9f0488caf77b: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_free_044aaf099344585b: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_06965280feb57b10: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_1b6346e5fe0de262: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_200d3c385360e96d: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_241fb3b9b55f3c6d: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_6db425b7f4cfd2e4: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_9547e899e638fe17: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_994e64fcbb109155: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_f348b94f927388d5: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_f5d3e11c1ce6bd56: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_versions_4e31226f5e8dc909: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./index_bg.js": import0,
    };
}

const ForeignFutureCompleteF32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletef32_free(ptr >>> 0, 1));
const ForeignFutureCompleteF64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletef64_free(ptr >>> 0, 1));
const ForeignFutureCompleteI16Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei16_free(ptr >>> 0, 1));
const ForeignFutureCompleteI32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei32_free(ptr >>> 0, 1));
const ForeignFutureCompleteI64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei64_free(ptr >>> 0, 1));
const ForeignFutureCompleteI8Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei8_free(ptr >>> 0, 1));
const ForeignFutureCompleteRustBufferFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleterustbuffer_free(ptr >>> 0, 1));
const ForeignFutureCompleteU16Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu16_free(ptr >>> 0, 1));
const ForeignFutureCompleteU32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu32_free(ptr >>> 0, 1));
const ForeignFutureCompleteU64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu64_free(ptr >>> 0, 1));
const ForeignFutureCompleteU8Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu8_free(ptr >>> 0, 1));
const ForeignFutureCompleteVoidFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletevoid_free(ptr >>> 0, 1));
const RustCallStatusFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rustcallstatus_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }


    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
