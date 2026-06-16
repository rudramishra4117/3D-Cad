import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface EllipseOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    xvec: XYZ;
    majorRadius: number;
    minorRadius: number;
}
export declare class EllipseNode extends FacebaseNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get majorRadius(): number;
    set majorRadius(radius: number);
    get minorRadius(): number;
    set minorRadius(radius: number);
    get normal(): XYZ;
    get xvec(): XYZ;
    constructor(options: EllipseOptions);
    generateShape(): Result<IShape, string>;
}
