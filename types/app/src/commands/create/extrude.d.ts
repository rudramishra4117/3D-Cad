import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class ExtrudeCommand extends CreateCommand {
    protected geometryNode(): GeometryNode;
    protected getSteps(): IStep[];
    private readonly getLengthStepData;
    private getAxis;
}
