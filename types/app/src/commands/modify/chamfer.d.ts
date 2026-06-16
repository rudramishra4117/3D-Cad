import { SelectShapeStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class ChamferCommand extends MultistepCommand {
    get length(): number;
    set length(value: number);
    protected executeMainTask(): void;
    protected getSteps(): SelectShapeStep[];
}
