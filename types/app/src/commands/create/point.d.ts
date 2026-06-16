import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Point extends CreateCommand {
    protected geometryNode(): GeometryNode;
    getSteps(): IStep[];
}
