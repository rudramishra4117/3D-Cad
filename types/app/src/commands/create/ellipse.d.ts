import { type GeometryNode, type IStep, type XYZ } from "@dronecad/core";
import { CreateFaceableCommand } from "../createCommand";
export declare class Ellipse extends CreateFaceableCommand {
    getSteps(): IStep[];
    private readonly getRadius1Data;
    private readonly validatePoint;
    protected previewCircle: (
        end: XYZ | undefined,
    ) => (import("@dronecad/core").EdgeMeshData | import("@dronecad/core").VertexMeshData)[];
    private readonly getRadius2Data;
    protected geometryNode(): GeometryNode;
    private readonly ellipsePreview;
    private createEllipse;
}
