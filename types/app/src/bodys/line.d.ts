import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface LineOptions {
    document: IDocument;
    start: XYZ;
    end: XYZ;
}
export declare class LineNode extends ParameterShapeNode {
    display(): I18nKeys;
    get start(): XYZ;
    set start(pnt: XYZ);
    get end(): XYZ;
    set end(pnt: XYZ);
    constructor(options: LineOptions);
    generateShape(): Result<IShape, string>;
}
