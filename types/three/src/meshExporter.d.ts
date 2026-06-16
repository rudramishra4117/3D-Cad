import { type IMeshExporter, Result, type VisualNode } from "@dronecad/core";
import type { ThreeVisualContext } from "./threeVisualContext";
export declare class ThreeMeshExporter implements IMeshExporter {
    readonly content: ThreeVisualContext;
    constructor(content: ThreeVisualContext);
    exportToStl(nodes: VisualNode[], asciiMode: boolean): Result<BlobPart>;
    exportToPly(nodes: VisualNode[], asciiMode: boolean): Result<BlobPart>;
    exportToObj(nodes: VisualNode[]): Result<BlobPart>;
    private disposeObject;
    private parseNodeToGroup;
}
