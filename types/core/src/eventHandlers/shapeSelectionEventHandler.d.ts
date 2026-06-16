import type { IDocument } from "../document";
import type { AsyncController } from "../foundation";
import type { INodeFilter, IShapeFilter } from "../selectionFilter";
import type { ShapeType } from "../shape";
import { type IView, type VisualShapeData, type VisualState } from "../visual";
import { SelectionHandler } from "./selectionEventHandler";
export declare abstract class ShapeSelectionHandler extends SelectionHandler {
    readonly shapeType: ShapeType;
    readonly shapefilter?: IShapeFilter | undefined;
    readonly nodeFilter?: INodeFilter | undefined;
    protected _highlights: VisualShapeData[] | undefined;
    private _detectAtMouse;
    private _lockDetected;
    highlightState: VisualState;
    constructor(
        document: IDocument,
        shapeType: ShapeType,
        multiMode: boolean,
        controller?: AsyncController,
        shapefilter?: IShapeFilter | undefined,
        nodeFilter?: INodeFilter | undefined,
    );
    private getDetecteds;
    protected setHighlight(view: IView, event: PointerEvent): void;
    protected highlightDetecteds(view: IView, detecteds: VisualShapeData[]): void;
    protected cleanHighlights(): void;
    protected highlightNext(view: IView): void;
    private getDetecting;
    private getDetcedtingIndex;
}
export declare class SubshapeSelectionHandler extends ShapeSelectionHandler {
    private readonly _shapes;
    selectedState: VisualState;
    constructor(
        document: IDocument,
        shapeType: ShapeType,
        multiMode: boolean,
        controller?: AsyncController,
        filter?: IShapeFilter,
        nodeFilter?: INodeFilter,
    );
    shapes(): VisualShapeData[];
    clearSelected(document: IDocument): void;
    protected select(view: IView, event: PointerEvent): number;
    private removeSelected;
    private addSelected;
}
