import { type I18nKeys, type IDocument, type IShape, ParameterShapeNode, Result } from "@dronecad/core";
export interface BooleanOptions {
    document: IDocument;
    booleanShape: IShape;
}
export declare class BooleanNode extends ParameterShapeNode {
    display(): I18nKeys;
    get booleanShape(): IShape;
    constructor(options: BooleanOptions);
    generateShape(): Result<IShape>;
}
