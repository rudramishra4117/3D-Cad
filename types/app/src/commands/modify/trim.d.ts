import {
    AsyncController,
    CancelableCommand,
    type ICurve,
    type IDocument,
    type IShape,
    type IShapeFilter,
    type IView,
    ShapeSelectionHandler,
    type VisualShapeData,
} from "@dronecad/core";
export declare class Trim extends CancelableCommand {
    protected executeAsync(): Promise<void>;
    private trimAsync;
    private trimEdge;
}
export declare class EdgeFilter implements IShapeFilter {
    allow(shape: IShape): boolean;
}
interface TrimEdge {
    edge: VisualShapeData;
    curve: ICurve;
    segments: {
        deleteSegment: {
            start: number;
            end: number;
        };
        retainSegments: {
            start: number;
            end: number;
        }[];
    };
}
export declare class PickTrimEdgeEventHandler extends ShapeSelectionHandler {
    #private;
    private highlightedEdge;
    private highlight;
    private readonly releaseStack;
    get selected(): TrimEdge | undefined;
    constructor(document: IDocument, controller: AsyncController);
    protected highlightDetecteds(view: IView, detecteds: VisualShapeData[]): void;
    protected cleanHighlights(): void;
    protected clearSelected(document: IDocument): void;
    protected select(view: IView, event: PointerEvent): number;
    private filterByBoundingBox;
    disposeInternal(): void;
}
