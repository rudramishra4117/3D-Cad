import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Arc extends CreateCommand {
    private _planeAngle;
    getSteps(): IStep[];
    private readonly getRadiusData;
    private readonly getAngleData;
    private anglePreview;
    private angleValidator;
    protected geometryNode(): GeometryNode;
    private readonly circlePreview;
}
