import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface ArcOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    start: XYZ;
    angle: number;
}
export declare class ArcNode extends ParameterShapeNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get start(): XYZ;
    get normal(): XYZ;
    get angle(): number;
    set angle(value: number);
    constructor(options: ArcOptions);
    generateShape(): Result<IShape, string>;
}
