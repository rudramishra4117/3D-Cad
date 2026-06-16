import type { IDocument } from "../document";
import type { AsyncController } from "../foundation";
import type { IEventHandler, IView } from "../visual";

interface SelectionRect {
    element: HTMLElement;
    clientX: number;
    clientY: number;
}
export declare abstract class SelectionHandler implements IEventHandler {
    #private;
    readonly document: IDocument;
    readonly multiMode: boolean;
    readonly controller?: AsyncController | undefined;
    protected rect?: SelectionRect;
    protected showRect: boolean;
    protected mouse: {
        isDown: boolean;
        x: number;
        y: number;
    };
    protected readonly pointerEventMap: Map<number, PointerEvent>;
    isEnabled: boolean;
    constructor(document: IDocument, multiMode: boolean, controller?: AsyncController | undefined);
    readonly dispose: () => void;
    protected disposeInternal(): void;
    pointerMove(view: IView, event: PointerEvent): void;
    protected abstract setHighlight(view: IView, event: PointerEvent): void;
    protected abstract cleanHighlights(): void;
    protected abstract clearSelected(document: IDocument): void;
    protected abstract select(view: IView, event: PointerEvent): number;
    protected abstract highlightNext(view: IView): void;
    pointerDown(view: IView, event: PointerEvent): void;
    private initRect;
    protected updateRect(rect: SelectionRect, event: PointerEvent): void;
    pointerOut(view: IView, event: PointerEvent): void;
    pointerUp(view: IView, event: PointerEvent): void;
    private removeRect;
    keyDown(view: IView, event: KeyboardEvent): void;
}
