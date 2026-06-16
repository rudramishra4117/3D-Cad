import {
    type I18nKeys,
    type IDocument,
    type IEdge,
    type IShape,
    type IWire,
    ParameterShapeNode,
    Result,
} from "@dronecad/core";
export interface FaceOptions {
    document: IDocument;
    shapes: IEdge[] | IWire[];
}
export declare class FaceNode extends ParameterShapeNode {
    display(): I18nKeys;
    get shapes(): IEdge[] | IWire[];
    set shapes(values: IEdge[] | IWire[]);
    constructor(options: FaceOptions);
    private isAllClosed;
    private getWires;
    private addClosedEdges;
    private addUnclosedEdges;
    generateShape(): Result<IShape>;
}
