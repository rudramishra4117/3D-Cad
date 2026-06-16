import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class Break extends MultistepCommand {
    protected executeMainTask(): void;
    protected getSteps(): IStep[];
    private readonly handlePointData;
}
