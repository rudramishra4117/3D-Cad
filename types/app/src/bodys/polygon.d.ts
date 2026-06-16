import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface PolygonOptions {
    document: IDocument;
    points: XYZ[];
}
export declare class PolygonNode extends FacebaseNode {
    display(): I18nKeys;
    get points(): XYZ[];
    set points(value: XYZ[]);
    constructor(options: PolygonOptions);
    generateShape(): Result<IShape, string>;
}
