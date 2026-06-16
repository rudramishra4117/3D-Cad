import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Revolve extends CreateCommand {
    get angle(): number;
    set angle(value: number);
    protected geometryNode(): GeometryNode;
    protected getSteps(): IStep[];
}
