import { type XYZ } from "../../math";
import type { ISnap, MouseAndDetected, SnapResult } from "../snap";
export declare class AxisSnap implements ISnap {
    readonly point: XYZ;
    readonly direction: XYZ;
    private _tempLines?;
    constructor(point: XYZ, direction: XYZ);
    snap(data: MouseAndDetected): SnapResult | undefined;
    private showTempLine;
    removeDynamicObject(): void;
    clear(): void;
}
