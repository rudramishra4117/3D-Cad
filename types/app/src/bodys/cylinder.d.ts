import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    type XYZ,
} from "@dronecad/core";
export interface CylinderNodeOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    radius: number;
    dz: number;
}
export declare class CylinderNode extends ParameterShapeNode {
    display(): I18nKeys;
    get center(): XYZ;
    set center(center: XYZ);
    get radius(): number;
    set radius(dy: number);
    get dz(): number;
    set dz(dz: number);
    get normal(): XYZ;
    constructor(options: CylinderNodeOptions);
    generateShape(): Result<IShape>;
}
