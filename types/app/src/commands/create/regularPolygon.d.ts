import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateFaceableCommand } from "../createCommand";
export declare class RegularPolygon extends CreateFaceableCommand {
    private _sides;
    get sides(): number;
    set sides(value: number);
    getSteps(): IStep[];
    private readonly getRadiusData;
    protected geometryNode(): GeometryNode;
    private readonly polygonPreview;
    private getPlane;
}
