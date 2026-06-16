import type { IDocument } from "../document";
import type { AsyncController } from "../foundation";
import type { VisualNode } from "../model";
import type { INodeFilter } from "../selectionFilter";
import { type IView, type IVisualObject } from "../visual";
import { SelectionHandler } from "./selectionEventHandler";
export declare class NodeSelectionHandler extends SelectionHandler {
    readonly filter?: INodeFilter | undefined;
    private _highlights;
    private _detectAtMouse;
    private _lockDetected;
    protected highlighState: 1;
    nodes(): VisualNode[];
    constructor(
        document: IDocument,
        multiMode: boolean,
        controller?: AsyncController,
        filter?: INodeFilter | undefined,
    );
    protected select(view: IView, event: PointerEvent): number;
    protected toggleSelect(event: PointerEvent): boolean;
    getDetecteds(view: IView, event: PointerEvent): IVisualObject[];
    private getDetecting;
    private getDetcedtingIndex;
    protected setHighlight(view: IView, event: PointerEvent): void;
    private highlightDetecteds;
    protected cleanHighlights(): void;
    protected highlightNext(view: IView): void;
    clearSelected(document: IDocument): void;
}
