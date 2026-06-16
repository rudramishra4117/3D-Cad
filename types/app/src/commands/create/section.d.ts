import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class Section extends MultistepCommand {
    protected executeMainTask(): void;
    protected getSteps(): IStep[];
}
