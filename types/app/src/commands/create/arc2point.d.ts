import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Arc2Point extends CreateCommand {
    getSteps(): IStep[];
    private readonly getEndPointData;
    private readonly getBulgeData;
    private readonly endPreview;
    private readonly arcPreview;
    protected geometryNode(): GeometryNode;
}
