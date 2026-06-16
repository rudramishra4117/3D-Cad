import type { IDocument } from "../../document";
import type { AsyncController } from "../../foundation";
import type { I18nKeys } from "../../i18n";
import { type Line, type Plane, XYZ } from "../../math";
import type { ICurve, ShapeType } from "../../shape";
import type { IView } from "../../visual";
import { type Dimension } from "../dimension";
import type { ISnap, SnapData, SnapResult } from "../snap";
import { SnapEventHandler } from "./snapEventHandler";
export interface PointSnapData extends SnapData {
    dimension?: Dimension;
    refPoint?: () => XYZ;
    plane?: () => Plane;
}
export interface SnapPointOnCurveData extends PointSnapData {
    curve: ICurve;
}
export interface SnapPointOnAxisData extends PointSnapData {
    ray: Line;
}
export declare class PointSnapEventHandler extends SnapEventHandler<PointSnapData> {
    constructor(document: IDocument, controller: AsyncController, pointData: PointSnapData);
    protected getInitSnaps(pointData: PointSnapData): ISnap[];
    protected getPointFromInput(view: IView, text: string): SnapResult;
    private parseInputDimensions;
    private calculatePointFromDistance;
    private calculatePointFromCoordinates;
    protected inputError(text: string): I18nKeys | undefined;
    private isValidDimension;
    private hasInvalidNumbers;
    private requiresThreeNumbers;
    private isInvalidSingleNumber;
    private getRefPoint;
}
export declare class SnapPointOnCurveEventHandler extends SnapEventHandler<SnapPointOnCurveData> {
    constructor(document: IDocument, controller: AsyncController, pointData: SnapPointOnCurveData);
    protected getPointFromInput(view: IView, text: string): SnapResult;
    protected inputError(text: string): "error.input.invalidNumber" | undefined;
}
export declare class SnapPointOnAxisEventHandler extends SnapEventHandler<SnapPointOnAxisData> {
    constructor(document: IDocument, controller: AsyncController, pointData: SnapPointOnAxisData);
    protected getPointFromInput(view: IView, text: string): SnapResult;
    protected inputError(text: string): "error.input.invalidNumber" | undefined;
}
export declare class SnapPointPlaneEventHandler extends PointSnapEventHandler {
    protected getInitSnaps(pointData: PointSnapData): ISnap[];
    protected findSnapPoint(shapeType: ShapeType, view: IView, event: PointerEvent): void;
}
