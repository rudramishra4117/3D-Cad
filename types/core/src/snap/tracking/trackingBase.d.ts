import type { IDocument } from "../../document";
import type { SnapResult } from "..";
export declare abstract class TrackingBase {
    readonly trackingZ: boolean;
    protected readonly tempMeshes: Map<IDocument, number[]>;
    protected isCleared: boolean;
    constructor(trackingZ: boolean);
    clear(): void;
    protected clearTempMeshes(): void;
    protected addTempMesh(document: IDocument, meshId: number): void;
    protected displayPoint(document: IDocument, point: SnapResult, size: number, color: number): number;
}
