import { type EdgeMeshData, type Matrix4, VisualNode, type XYZ } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare abstract class TransformedCommand extends MultistepCommand {
    protected models?: VisualNode[];
    protected positions?: number[];
    get isClone(): boolean;
    set isClone(value: boolean);
    protected abstract transfrom(p2: XYZ): Matrix4;
    protected transformPreview: (point: XYZ) => EdgeMeshData;
    private ensureSelectedModels;
    protected canExcute(): Promise<boolean>;
    protected getTempLineData(start: XYZ, end: XYZ): EdgeMeshData;
    protected executeMainTask(): void;
}
