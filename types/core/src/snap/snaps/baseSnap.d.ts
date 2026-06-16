import type { XYZ } from "../../math";
import { type IView, type VisualShapeData } from "../../visual";
import type { ISnap, MouseAndDetected, SnapResult } from "../snap";
export declare abstract class BaseSnap implements ISnap {
    readonly referencePoint?: (() => XYZ) | undefined;
    protected _tempMeshIds: Map<IView, number[]>;
    protected _highlightedShapes: VisualShapeData[];
    constructor(referencePoint?: (() => XYZ) | undefined);
    abstract snap(data: MouseAndDetected): SnapResult | undefined;
    removeDynamicObject(): void;
    clear(): void;
    protected clearTempMeshes(): void;
    protected addTempMesh(view: IView, meshId: number): void;
    protected highlight(shapes: VisualShapeData[]): void;
    protected unhighlight(): void;
    protected calculateDistance(point: XYZ): number | undefined;
}
