import {
    type I18nKeys,
    type IDocument,
    type IEdge,
    type IShape,
    ParameterShapeNode,
    type Result,
} from "@dronecad/core";
export interface WireOptions {
    document: IDocument;
    edges: IEdge[];
}
export declare class WireNode extends ParameterShapeNode {
    display(): I18nKeys;
    get edges(): IEdge[];
    set edges(values: IEdge[]);
    constructor(options: WireOptions);
    generateShape(): Result<IShape>;
}
