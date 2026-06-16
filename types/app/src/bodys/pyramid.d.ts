import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Plane,
    type Result,
} from "@dronecad/core";
export interface PyramidNodeOptions {
    document: IDocument;
    plane: Plane;
    dx: number;
    dy: number;
    dz: number;
}
export declare class PyramidNode extends ParameterShapeNode {
    display(): I18nKeys;
    get dx(): number;
    set dx(dx: number);
    get dy(): number;
    set dy(dy: number);
    get dz(): number;
    set dz(dz: number);
    get plane(): Plane;
    constructor(options: PyramidNodeOptions);
    generateShape(): Result<IShape>;
}
