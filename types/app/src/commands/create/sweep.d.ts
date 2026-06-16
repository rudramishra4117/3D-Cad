import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Sweep extends CreateCommand {
    get round(): boolean;
    set round(value: boolean);
    protected geometryNode(): GeometryNode;
    protected getSteps(): IStep[];
}
