import { SelectShapeStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class SimplifyShapeCommand extends MultistepCommand {
    get removeEdges(): boolean;
    set removeEdges(value: boolean);
    get removeFaces(): boolean;
    set removeFaces(value: boolean);
    protected executeMainTask(): void;
    protected getSteps(): SelectShapeStep[];
}
