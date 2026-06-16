import { type GeometryNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class Line extends CreateCommand {
    get isContinue(): boolean;
    set isContinue(value: boolean);
    protected geometryNode(): GeometryNode;
    protected executeMainTask(): void;
    getSteps(): IStep[];
    protected resetStepDatas(): void;
    private readonly getSecondPointData;
    private readonly linePreview;
}
