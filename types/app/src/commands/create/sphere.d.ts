import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Sphere extends CreateCommand {
    protected getSteps(): IStep[];
    private readonly getRadiusData;
    private readonly previewSphere;
    protected geometryNode(): GeometryNode;
}
