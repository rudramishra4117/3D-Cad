import { type GeometryNode, type IStep, Plane, type XYZ } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export interface RectData {
    plane: Plane;
    dx: number;
    dy: number;
    p1: XYZ;
    p2: XYZ;
}
export declare function getReactData(atPlane: Plane, start: XYZ, end: XYZ): RectData;
export declare abstract class RectCommandBase extends CreateCommand {
    protected getSteps(): IStep[];
    private readonly nextSnapData;
    private readonly handleValid;
    protected previewRect: (
        end: XYZ | undefined,
    ) => (import("@dronecad/core").EdgeMeshData | import("@dronecad/core").VertexMeshData)[];
    protected rectDataFromTemp(tmp: XYZ): RectData;
    protected rectDataFromTwoSteps(): RectData;
}
export declare class Rect extends RectCommandBase {
    get isFace(): boolean;
    set isFace(value: boolean);
    protected geometryNode(): GeometryNode;
}
