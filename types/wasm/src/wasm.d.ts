import { type MainModule } from "../lib/dronecad-wasm";

declare global {
    var wasm: MainModule;
}
export interface InitWasmOptions {
    /**
     * Raw bytes of `dronecad-wasm.wasm`. Required when running under Node (e.g. the
     * MCP server or integration tests), where the Emscripten glue cannot `fetch`
     * the binary. Omit in the browser — Emscripten loads the `.wasm` itself.
     */
    wasmBinary?: BufferSource;
}
export declare function initWasm(options?: InitWasmOptions): Promise<MainModule>;
