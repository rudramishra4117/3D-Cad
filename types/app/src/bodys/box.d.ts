import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Plane,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface BoxNodeOptions {
    document: IDocument;
    plane: Plane;
    dx: number;
    dy: number;
    dz: number;
}
export declare class BoxNode extends ParameterShapeNode {
    display(): I18nKeys;
    get plane(): Plane;
    get location(): XYZ;
    set location(value: XYZ);
    get dx(): number;
    set dx(dx: number);
    get dy(): number;
    set dy(dy: number);
    get dz(): number;
    set dz(dz: number);
    constructor(options: BoxNodeOptions);
    generateShape(): Result<IShape>;
}
