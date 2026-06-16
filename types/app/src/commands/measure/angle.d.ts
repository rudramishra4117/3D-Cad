import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class AngleMeasure extends MultistepCommand {
    protected getSteps(): IStep[];
    private readonly getSecondPointData;
    private readonly linePreview;
    private readonly getThirdPointData;
    private readonly anglePrompt;
    private readonly arcPreview;
    private lineLength;
    private arcInfo;
    protected executeMainTask(): void;
}
