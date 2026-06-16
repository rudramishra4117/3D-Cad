import type { XYZ } from "../../math";
import type { IView } from "../../visual";
import { Axis } from "./axis";
import { TrackingBase } from "./trackingBase";
export declare class AxisTracking extends TrackingBase {
    private readonly axies;
    constructor(trackingZ: boolean);
    getAxes(view: IView, referencePoint: XYZ, angle?: number | undefined): Axis[];
    private initAxes;
    clear(): void;
}
