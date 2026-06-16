import { type IDocument, type INode, NodeSelectionHandler } from "@dronecad/core";
export declare class ShowPropertyEventHandler extends NodeSelectionHandler {
    constructor(document: IDocument);
    protected readonly handleSelectionChanged: (
        _doc: IDocument,
        selected: INode[],
        _unselected: INode[],
    ) => void;
    disposeInternal(): void;
}
