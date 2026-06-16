import { type I18nKeys, type IDocument, type IShape, ParameterShapeNode, type Result } from "@dronecad/core";
export interface FuseOptions {
    document: IDocument;
    bottom: IShape;
    top: IShape;
}
export declare class FuseNode extends ParameterShapeNode {
    display(): I18nKeys;
    get bottom(): IShape;
    set bottom(value: IShape);
    get top(): IShape;
    set top(value: IShape);
    constructor(options: FuseOptions);
    generateShape(): Result<IShape>;
}
