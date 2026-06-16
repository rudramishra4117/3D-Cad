import {
    type I18nKeys,
    type IDocument,
    type IEdge,
    type IShape,
    type IWire,
    ParameterShapeNode,
    type Result,
} from "@dronecad/core";
export interface SweepOptions {
    document: IDocument;
    profile: (IWire | IEdge)[];
    path: IWire | IEdge;
    round: boolean;
}
export declare class SweepedNode extends ParameterShapeNode {
    display(): I18nKeys;
    get profile(): IShape[];
    set profile(value: IShape[]);
    get path(): IWire;
    set path(value: IWire);
    get round(): boolean;
    set round(value: boolean);
    constructor(options: SweepOptions);
    private ensureWire;
    generateShape(): Result<IShape>;
}
