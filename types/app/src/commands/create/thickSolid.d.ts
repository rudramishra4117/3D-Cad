import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class ThickSolidCommand extends MultistepCommand {
    get thickness(): number;
    set thickness(value: number);
    protected executeMainTask(): void;
    protected getSteps(): IStep[];
}
