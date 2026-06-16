import {
    type GroupNode,
    type IConverter,
    type IDocument,
    Matrix4,
    Result,
    type VisualNode,
    type XYZLike,
} from "@dronecad/core";
import { PropertyBase } from "./propertyBase";
export declare class MatrixProperty extends PropertyBase {
    readonly document: IDocument;
    readonly first: VisualNode | GroupNode;
    constructor(document: IDocument, geometries: (VisualNode | GroupNode)[], className: string);
    private readonly onPropertyChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare abstract class MatrixConverter implements IConverter<Matrix4, string> {
    readonly geometry: VisualNode | GroupNode;
    constructor(geometry: VisualNode | GroupNode);
    convert(value: Matrix4): Result<string, string>;
    protected abstract convertFrom(value: Matrix4): [number, number, number];
    protected abstract convertTo(values: XYZLike): Matrix4;
    convertBack(value: string): Result<Matrix4, string>;
}
export declare class TranslationConverter extends MatrixConverter {
    protected convertFrom(matrix: Matrix4): [number, number, number];
    protected convertTo(values: XYZLike): Matrix4;
}
export declare class ScalingConverter extends MatrixConverter {
    protected convertFrom(matrix: Matrix4): [number, number, number];
    protected convertTo(values: XYZLike): Matrix4;
}
export declare class RotateConverter extends MatrixConverter {
    protected convertFrom(matrix: Matrix4): [number, number, number];
    protected convertTo(values: XYZLike): Matrix4;
}
