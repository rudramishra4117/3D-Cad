import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    type Plane,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface RectOptions {
    document: IDocument;
    plane: Plane;
    dx: number;
    dy: number;
}
export declare class RectNode extends FacebaseNode {
    display(): I18nKeys;
    get dx(): number;
    set dx(dx: number);
    get dy(): number;
    set dy(dy: number);
    get plane(): Plane;
    constructor(options: RectOptions);
    generateShape(): Result<IShape, string>;
    static points(plane: Plane, dx: number, dy: number): XYZ[];
}
