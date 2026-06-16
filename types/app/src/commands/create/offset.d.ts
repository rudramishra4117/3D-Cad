import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class OffsetCommand extends MultistepCommand {
    protected executeMainTask(): void;
    protected getSteps(): IStep[];
    private preview;
    private getAxis;
    private getFaceOrWireAxis;
    private getEdgeAxis;
    private getNearstPointAndDirection;
    private createOffsetShape;
}
