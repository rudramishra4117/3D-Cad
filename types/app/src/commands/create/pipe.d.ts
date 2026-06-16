import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class Pipe extends MultistepCommand {
    get radius(): number;
    set radius(value: number);
    readonly confirm: () => void;
    protected executeMainTask(): void;
    protected executeSteps(): Promise<boolean>;
    protected getSteps(): IStep[];
    private readonly getNextData;
    private readonly preview;
}
