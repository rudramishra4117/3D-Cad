import { type GeometryNode, type IStep, type XYZ } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Cone extends CreateCommand {
    protected getSteps(): IStep[];
    private readonly getRadiusData;
    private readonly circlePreview;
    private readonly getHeightStepData;
    private readonly previewCone;
    protected meshLine(start: XYZ, end: XYZ): import("@dronecad/core").EdgeMeshData;
    protected geometryNode(): GeometryNode;
    private getHeight;
}
