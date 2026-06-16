import type { IDocument } from "../document";
import { type AsyncController } from "../foundation";
import type { I18nKeys } from "../i18n";
import type { XYZ } from "../math";
import {
    type PointSnapData,
    PointSnapEventHandler,
    type SnapPointOnAxisData,
    SnapPointOnAxisEventHandler,
    type SnapPointOnCurveData,
    SnapPointOnCurveEventHandler,
    SnapPointPlaneEventHandler,
} from "../snap";
import { SnapStep } from "./step";
export declare class PointStep extends SnapStep<PointSnapData> {
    constructor(tip: I18nKeys, handleData?: () => PointSnapData, keepSelected?: boolean);
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: PointSnapData,
    ): PointSnapEventHandler;
    protected validator(data: PointSnapData, point: XYZ): boolean;
}
export declare class PointOnCurveStep extends SnapStep<SnapPointOnCurveData> {
    constructor(tip: I18nKeys, handleData: () => SnapPointOnCurveData, keepSelected?: boolean);
    protected validator(data: SnapPointOnCurveData, point: XYZ): boolean;
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: SnapPointOnCurveData,
    ): SnapPointOnCurveEventHandler;
}
export declare class PointOnAxisStep extends SnapStep<SnapPointOnAxisData> {
    constructor(tip: I18nKeys, handleData: () => SnapPointOnAxisData, keepSelected?: boolean);
    protected validator(data: SnapPointOnAxisData, point: XYZ): boolean;
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: SnapPointOnAxisData,
    ): SnapPointOnAxisEventHandler;
}
export declare class PointOnPlaneStep extends SnapStep<PointSnapData> {
    constructor(tip: I18nKeys, handleData: () => PointSnapData, keepSelected?: boolean);
    protected validator(data: PointSnapData, point: XYZ): boolean;
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: SnapPointOnCurveData,
    ): SnapPointPlaneEventHandler;
}
