import { type IStep, Matrix4, type XYZ } from "@dronecad/core";
import { TransformedCommand } from "./transformedCommand";
export declare class Move extends TransformedCommand {
    getSteps(): IStep[];
    private readonly getSecondPointData;
    private readonly movePreview;
    protected transfrom(point: XYZ): Matrix4;
}
