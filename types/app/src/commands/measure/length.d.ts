import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class LengthMeasure extends MultistepCommand {
    protected getSteps(): IStep[];
    private readonly getSecondPointData;
    private readonly linePreview;
    protected executeMainTask(): void;
}
