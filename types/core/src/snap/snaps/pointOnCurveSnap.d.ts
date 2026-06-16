import type { SnapPointOnCurveData } from "../handlers";
import type { ISnap, MouseAndDetected, SnapResult } from "../snap";
export declare class PointOnCurveSnap implements ISnap {
    readonly pointData: SnapPointOnCurveData;
    constructor(pointData: SnapPointOnCurveData);
    snap(data: MouseAndDetected): SnapResult | undefined;
    removeDynamicObject(): void;
    clear(): void;
}
