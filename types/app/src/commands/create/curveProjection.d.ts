import { EditableShapeNode, type IStep } from "@dronecad/core";
import { CreateCommand } from "../createCommand";
export declare class CurveProjectionCommand extends CreateCommand {
    get dir(): string;
    set dir(value: string);
    protected geometryNode(): EditableShapeNode;
    protected getSteps(): IStep[];
}
