import { type GeometryNode, type IStep } from "@dronecad/core";
import { RectCommandBase } from "./rect";
export declare class Pyramid extends RectCommandBase {
    protected getSteps(): IStep[];
    private readonly getHeightStepData;
    private readonly previewPyramid;
    protected geometryNode(): GeometryNode;
    private getHeight;
}
