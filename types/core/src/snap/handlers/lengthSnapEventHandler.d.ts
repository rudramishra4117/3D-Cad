import type { IDocument } from "../../document";
import { type AsyncController } from "../../foundation";
import type { I18nKeys } from "../../i18n";
import type { Plane, XYZ } from "../../math";
import type { IView } from "../../visual";
import type { SnapData, SnapResult } from "../snap";
import { SnapEventHandler } from "./snapEventHandler";
export interface LengthAtAxisSnapData extends SnapData {
    point: XYZ;
    direction: XYZ;
}
export interface SnapLengthAtPlaneData extends SnapData {
    point: () => XYZ;
    plane: (point: XYZ | undefined) => Plane;
}
export declare class SnapLengthAtAxisHandler extends SnapEventHandler<LengthAtAxisSnapData> {
    constructor(document: IDocument, controller: AsyncController, lengthData: LengthAtAxisSnapData);
    protected getPointFromInput(view: IView, text: string): SnapResult;
    private calculateDistance;
    private calculatePoint;
    private shouldReverse;
    protected inputError(text: string): I18nKeys | undefined;
}
export declare class SnapLengthAtPlaneHandler extends SnapEventHandler<SnapLengthAtPlaneData> {
    readonly lengthData: SnapLengthAtPlaneData;
    private workplane;
    constructor(document: IDocument, controller: AsyncController, lengthData: SnapLengthAtPlaneData);
    protected setSnaped(view: IView, event: PointerEvent): void;
    private updateWorkplane;
    protected getPointFromInput(view: IView, text: string): SnapResult;
    private calculatePoint;
    private calculatePointFromDistance;
    private calculatePointFromCoordinates;
    protected inputError(text: string): I18nKeys | undefined;
}
