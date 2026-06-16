import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class GroupCommand extends MultistepCommand {
    protected getSteps(): IStep[];
    protected executeMainTask(): void;
    private createGroup;
    private readonly pickInsertPoint;
    private readonly findDialog;
    private dialog;
}
