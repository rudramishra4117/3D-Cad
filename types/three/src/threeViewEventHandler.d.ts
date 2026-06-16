import { type IEventHandler, type IView } from "@dronecad/core";
export declare class ThreeViewHandler implements IEventHandler {
    private _lastDown;
    private _clearDownId;
    private _offsetPoint;
    protected lastPointerEventMap: Map<number, PointerEvent>;
    protected currentPointerEventMap: Map<number, PointerEvent>;
    canRotate: boolean;
    isEnabled: boolean;
    dispose(): void;
    mouseWheel(view: IView, event: WheelEvent): void;
    pointerMove(view: IView, event: PointerEvent): void;
    private handleMouseMove;
    private handleTouchMove;
    private getPrimaryTouchOffset;
    private getCenterAndDistance;
    private distance;
    pointerDown(view: IView, event: PointerEvent): void;
    private handleMouseDown;
    private clearTimeout;
    pointerOut(view: IView, event: PointerEvent): void;
    pointerUp(view: IView, event: PointerEvent): void;
    keyDown(view: IView, event: KeyboardEvent): void;
}
