import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class AddBrushCommand extends MultistepCommand {
    get materialId(): string;
    set materialId(value: string);
    protected getSteps(): IStep[];
    protected executeMainTask(): void;
}
export declare class RemoveBrushCommand extends MultistepCommand {
    protected getSteps(): IStep[];
    protected executeMainTask(): void;
}
export declare class ClearBrushCommand extends MultistepCommand {
    protected getSteps(): IStep[];
    protected executeMainTask(): void;
}
