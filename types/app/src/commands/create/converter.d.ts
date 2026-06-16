import {
    CancelableCommand,
    type GeometryNode,
    type IDocument,
    type INode,
    type IShapeFilter,
    Result,
    type ShapeNode,
} from "@dronecad/core";

declare abstract class ConvertCommand extends CancelableCommand {
    executeAsync(): Promise<void>;
    protected abstract create(document: IDocument, models: INode[]): Result<GeometryNode>;
    protected shapeFilter(): IShapeFilter;
    getOrPickModels(document: IDocument): Promise<import("@dronecad/core").VisualNode[] | undefined>;
    private _getSelectedModels;
}
export declare class ConvertToWire extends ConvertCommand {
    protected create(document: IDocument, models: ShapeNode[]): Result<GeometryNode>;
}
export declare class ConvertToFace extends ConvertCommand {
    protected create(document: IDocument, models: ShapeNode[]): Result<GeometryNode>;
}
export declare class ConvertToShell extends ConvertCommand {
    protected shapeFilter(): IShapeFilter;
    protected create(document: IDocument, models: ShapeNode[]): Result<GeometryNode>;
}
export declare class ConvertToSolid extends ConvertCommand {
    protected shapeFilter(): IShapeFilter;
    protected create(document: IDocument, models: ShapeNode[]): Result<GeometryNode>;
}
