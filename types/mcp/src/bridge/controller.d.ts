import { type Op, type ResponseMessage } from "./protocol";
export declare class BridgeController {
    private readonly ws;
    private seq;
    private readonly pending;
    private readonly ready;
    constructor(url?: string);
    connect(): Promise<void>;
    private request;
    getState(): Promise<ResponseMessage>;
    newDocument(name?: string): Promise<ResponseMessage>;
    runProgram(ops: Op[]): Promise<ResponseMessage>;
    exportStl(binary?: boolean): Promise<ResponseMessage>;
    exportStep(): Promise<ResponseMessage>;
    saveDocument(): Promise<ResponseMessage>;
    renderPreview(): Promise<ResponseMessage>;
    getProperties(): Promise<ResponseMessage>;
    close(): void;
}
