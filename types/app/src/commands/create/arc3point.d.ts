import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Arc3Point extends CreateCommand {
    getSteps(): IStep[];
    private readonly getMidPointData;
    private readonly getEndPointData;
    private readonly midPreview;
    private readonly arcPreview;
    protected geometryNode(): GeometryNode;
}
