import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface CircleOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    radius: number;
}
export declare class CircleNode extends FacebaseNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get radius(): number;
    set radius(radius: number);
    get normal(): XYZ;
    constructor(options: CircleOptions);
    generateShape(): Result<IShape, string>;
}
