import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Cylinder extends CreateCommand {
    protected getSteps(): IStep[];
    private readonly getRadiusData;
    private readonly circlePreview;
    private readonly getHeightStepData;
    private readonly previewCylinder;
    protected geometryNode(): GeometryNode;
    private getHeight;
}
