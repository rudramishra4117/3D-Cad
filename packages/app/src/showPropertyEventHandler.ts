import { type IDocument, type INode, NodeSelectionHandler, PubSub } from "@dronecad/core";

export class ShowPropertyEventHandler extends NodeSelectionHandler {
    constructor(document: IDocument) {
        super(document, true);
        PubSub.default.sub("selectionChanged", this.handleSelectionChanged);
    }

    protected readonly handleSelectionChanged = (
        _doc: IDocument,
        selected: INode[],
        _unselected: INode[],
    ) => {
        PubSub.default.pub("showProperties", this.document, selected);
    };

    override disposeInternal() {
        PubSub.default.remove("selectionChanged", this.handleSelectionChanged);
        super.disposeInternal();
    }
}
