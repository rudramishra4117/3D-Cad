import type { Op } from "../program/schema";

export type { Op };
export declare const DEFAULT_BRIDGE_PORT = 8765;
export declare const DEFAULT_BRIDGE_URL = "ws://localhost:8765";
export type Role = "browser" | "controller";
export type BridgeAction =
    | "get_state"
    | "new_document"
    | "run_cad_program"
    | "export_stl"
    | "export_step"
    | "save_document"
    | "render_preview"
    | "get_properties";
export interface HelloMessage {
    kind: "hello";
    role: Role;
}
export interface RequestMessage {
    kind: "request";
    id: string;
    action: BridgeAction;
    name?: string;
    ops?: Op[];
    binary?: boolean;
}
export interface DocumentState {
    hasActiveDocument: boolean;
    documentId?: string;
    documentName?: string;
    nodeCount?: number;
    addedNodeIds?: string[];
}
export type DataType = "stl" | "step" | "cd" | "png" | "properties";
export interface ResponseMessage {
    kind: "response";
    id: string;
    ok: boolean;
    error?: string;
    state?: DocumentState;
    /** Payload for export/preview/measure: base64 (stl/png) or plain text (step/cd/properties JSON). */
    data?: string;
    dataType?: DataType;
}
export type BridgeMessage = HelloMessage | RequestMessage | ResponseMessage;
