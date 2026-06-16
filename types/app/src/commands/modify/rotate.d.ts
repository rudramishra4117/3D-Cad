import { type IStep, Matrix4, type XYZ } from "@dronecad/core";
import { TransformedCommand } from "./transformedCommand";
export declare class Rotate extends TransformedCommand {
    protected transfrom(point: XYZ): Matrix4;
    getSteps(): IStep[];
    private readonly getSecondPointData;
    private readonly circlePreview;
    private readonly getThirdPointData;
    private getAngle;
    private readonly anglePreview;
    private getRayData;
}
