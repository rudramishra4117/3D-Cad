import { SelectShapeStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class RemoveSubShapesCommand extends MultistepCommand {
    protected executeMainTask(): void;
    protected getSteps(): SelectShapeStep[];
}
