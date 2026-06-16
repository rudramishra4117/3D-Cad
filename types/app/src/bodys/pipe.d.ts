import {
    type I18nKeys,
    type IDocument,
    type IEdge,
    type IShape,
    type IWire,
    ParameterShapeNode,
    Result,
} from "@dronecad/core";
export interface PipeOptions {
    document: IDocument;
    radius: number;
    path: IWire | IEdge;
    bendRadius?: number;
    thickness?: number;
}
export declare class PipeNode extends ParameterShapeNode {
    display(): I18nKeys;
    get radius(): number;
    set radius(value: number);
    get path(): IWire;
    set path(value: IWire);
    get bendRadius(): number;
    set bendRadius(value: number);
    get thickness(): number;
    set thickness(value: number);
    constructor(options: PipeOptions);
    private ensureWire;
    generateShape(): Result<IShape>;
}
