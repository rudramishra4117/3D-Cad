import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateFaceableCommand } from "../createCommand";
export declare class Polygon extends CreateFaceableCommand {
    readonly confirm: () => void;
    protected geometryNode(): GeometryNode;
    protected executeSteps(): Promise<boolean>;
    private isClose;
    protected getSteps(): IStep[];
    private readonly getNextData;
    private readonly preview;
    private readonly validator;
}
