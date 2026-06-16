import type { IDocument } from "../../document";
import { type AsyncController, type MessageType } from "../../foundation";
import type { I18nKeys } from "../../i18n";
import { type ShapeType } from "../../shape";
import { type IEventHandler, type IView } from "../../visual";
import type { ISnap, SnapData, SnapResult } from "../snap";

type SnapState = "idle" | "snapping" | "inputing" | "cancelled" | "completed";
export declare abstract class SnapEventHandler<D extends SnapData = SnapData> implements IEventHandler {
    readonly document: IDocument;
    readonly controller: AsyncController;
    readonly snaps: ISnap[];
    readonly data: D;
    private _tempPoint?;
    private _tempShapes?;
    protected showTempPoint: boolean;
    protected _snaped?: SnapResult;
    private _state;
    facePreviewOpacity: number;
    isEnabled: boolean;
    constructor(document: IDocument, controller: AsyncController, snaps: ISnap[], data: D);
    get snaped(): SnapResult | undefined;
    get state(): SnapState;
    dispose(): void;
    private handleSuccess;
    private handleCancel;
    private cleanupResources;
    private clearInput;
    pointerMove(view: IView, event: PointerEvent): void;
    private updateSnapPoint;
    private updateVisualFeedback;
    protected setSnaped(view: IView, event: PointerEvent): void;
    private findNearestFeaturePoint;
    protected findSnapPoint(shapeType: ShapeType, view: IView, event: PointerEvent): void;
    private validateSnapPoint;
    private detectShapes;
    protected clearSnapPrompt(): void;
    protected showSnapPrompt(snaped: SnapResult): void;
    protected formatSnapPrompt(snaped: SnapResult):
        | HTMLElement
        | {
              level: MessageType;
              msg: string;
          }
        | undefined;
    protected formatSnapDistance(num: number): string;
    private removeTempVisuals;
    private showTempShape;
    private removeTempShapes;
    pointerDown(view: IView, event: PointerEvent): void;
    pointerUp(view: IView, event: PointerEvent): void;
    pointerOut(view: IView, event: PointerEvent): void;
    mouseWheel(view: IView, event: WheelEvent): void;
    keyDown(view: IView, event: KeyboardEvent): void;
    private handleNumericInput;
    protected abstract getPointFromInput(view: IView, text: string): SnapResult;
    protected abstract inputError(text: string): I18nKeys | undefined;
}
