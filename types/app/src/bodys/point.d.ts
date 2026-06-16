import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface PointOptions {
    document: IDocument;
    position: XYZ;
}
export declare class PointNode extends ParameterShapeNode {
    display(): I18nKeys;
    get position(): XYZ;
    set position(pnt: XYZ);
    constructor(options: PointOptions);
    generateShape(): Result<IShape, string>;
}
