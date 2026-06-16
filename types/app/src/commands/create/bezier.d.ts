import { type GeometryNode, type IStep, type XYZ } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class BezierCommand extends CreateCommand {
    protected geometryNode(): GeometryNode;
    protected executeSteps(): Promise<boolean>;
    private isClose;
    protected getSteps(): IStep[];
    private readonly getNextData;
    private readonly preview;
    private readonly previewLines;
    protected meshHandle(start: XYZ, end: XYZ): import("@dronecad/core").EdgeMeshData;
    private readonly validator;
}
