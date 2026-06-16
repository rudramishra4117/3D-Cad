import { type IDocument } from "@dronecad/core";
import type { Op, Program } from "./schema";
/** Ids whose output shape is consumed as input by a later op (so not a standalone node). */
export declare function collectConsumed(ops: Op[]): Set<string>;
export interface RunResult {
    /** Op ids that became standalone document nodes (terminal results). */
    addedNodeIds: string[];
}
/**
 * Execute a CAD program against a document, building a parametric node tree. Ops
 * run in order; `{ ref }` inputs resolve to the output shape of an earlier op.
 * Consumed shapes (extrude sections, boolean inputs) do not become standalone
 * nodes — only terminal results are added, so the document matches intent.
 */
export declare function runProgram(document: IDocument, program: Program): RunResult;
