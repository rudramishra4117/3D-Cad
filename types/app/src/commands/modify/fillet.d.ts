import { SelectShapeStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class FilletCommand extends MultistepCommand {
    get radius(): number;
    set radius(value: number);
    protected executeMainTask(): void;
    protected getSteps(): SelectShapeStep[];
}
