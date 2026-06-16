import {
    type I18nKeys,
    type IDocument,
    type IShape,
    type Line,
    ParameterShapeNode,
    type Result,
} from "@dronecad/core";
export interface RevolveOptions {
    document: IDocument;
    profile: IShape;
    axis: Line;
    angle: number;
}
export declare class RevolvedNode extends ParameterShapeNode {
    display(): I18nKeys;
    get profile(): IShape;
    set profile(value: IShape);
    get axis(): Line;
    set axis(value: Line);
    get angle(): number;
    set angle(value: number);
    constructor(options: RevolveOptions);
    generateShape(): Result<IShape>;
}
