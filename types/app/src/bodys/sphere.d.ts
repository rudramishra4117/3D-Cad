import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface SphereNodeOptions {
    document: IDocument;
    center: XYZ;
    radius: number;
}
export declare class SphereNode extends ParameterShapeNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get radius(): number;
    set radius(value: number);
    constructor(options: SphereNodeOptions);
    generateShape(): Result<IShape>;
}
