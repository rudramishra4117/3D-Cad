import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface RegularPolygonOptions {
    document: IDocument;
    normal: XYZ;
    xvec: XYZ;
    center: XYZ;
    radius: number;
    sides: number;
}
export declare class RegularPolygonNode extends FacebaseNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get radius(): number;
    set radius(radius: number);
    get sides(): number;
    set sides(sides: number);
    get normal(): XYZ;
    get xvec(): XYZ;
    constructor(options: RegularPolygonOptions);
    generateShape(): Result<IShape, string>;
    static calculateVertices(center: XYZ, radius: number, sides: number, normal: XYZ, xvec: XYZ): XYZ[];
}
