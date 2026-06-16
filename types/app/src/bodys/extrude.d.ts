import { type I18nKeys, type IDocument, type IShape, ParameterShapeNode, type Result } from "@dronecad/core";
export interface PrismOptions {
    document: IDocument;
    section: IShape;
    length: number;
}
export declare class ExtrudeNode extends ParameterShapeNode {
    display(): I18nKeys;
    get section(): IShape;
    set section(value: IShape);
    get length(): number;
    set length(value: number);
    constructor(options: PrismOptions);
    generateShape(): Result<IShape>;
}
