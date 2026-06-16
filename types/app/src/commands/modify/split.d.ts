import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class Split extends MultistepCommand {
    private splitedShape;
    protected executeMainTask(): void;
    private removeModels;
    protected getSteps(): IStep[];
}
