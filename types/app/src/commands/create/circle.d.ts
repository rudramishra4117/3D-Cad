import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateFaceableCommand } from "../createCommand";
export declare class Circle extends CreateFaceableCommand {
    getSteps(): IStep[];
    private readonly getRadiusData;
    protected geometryNode(): GeometryNode;
    private readonly circlePreview;
}
