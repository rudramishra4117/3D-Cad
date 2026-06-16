import { type GeometryNode } from "@dronecad/core";
import { MultistepCommand } from "./multistepCommand";
export declare abstract class CreateCommand extends MultistepCommand {
    protected executeMainTask(): void;
    protected abstract geometryNode(): GeometryNode;
}
export declare abstract class CreateNodeCommand extends MultistepCommand {
    protected executeMainTask(): void;
    protected abstract getNode(): GeometryNode;
}
export declare abstract class CreateFaceableCommand extends CreateCommand {
    protected _isFace: boolean;
    get isFace(): boolean;
    set isFace(value: boolean);
}
