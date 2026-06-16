import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";
export declare class Explode extends MultistepCommand {
    protected getSteps(): IStep[];
    protected executeMainTask(): void;
    private explodeShapeNode;
    private groupShapes;
    private explodeComponentNode;
    private explodeMultiShapeNode;
}
