import { type GeometryNode, type IStep } from "@dronecad/core";
import { RectCommandBase } from "./rect";
export declare class Box extends RectCommandBase {
    protected getSteps(): IStep[];
    private readonly getHeightStepData;
    private readonly previewBox;
    protected geometryNode(): GeometryNode;
    private getHeight;
}
