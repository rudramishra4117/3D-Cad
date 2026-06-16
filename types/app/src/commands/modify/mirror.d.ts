import { type IStep, Matrix4, type XYZ } from "@dronecad/core";
import { TransformedCommand } from "./transformedCommand";
export declare class Mirror extends TransformedCommand {
    protected transfrom(point: XYZ): Matrix4;
    getSteps(): IStep[];
    private readonly getSecondPointData;
    private readonly mirrorPreview;
}
