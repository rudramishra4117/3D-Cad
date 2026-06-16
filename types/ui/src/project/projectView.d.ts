import { type IDocument } from "@dronecad/core";
import { Tree } from "./tree";
export declare class ProjectView extends HTMLElement {
    private readonly _documentTreeMap;
    private _activeDocument;
    get activeDocument(): IDocument | undefined;
    private readonly panel;
    constructor(props: {
        className: string;
    });
    private render;
    activeTree(): Tree | undefined;
    private readonly handleDocumentClosed;
    private readonly handleActiveViewChanged;
}
