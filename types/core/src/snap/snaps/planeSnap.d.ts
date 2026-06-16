import type { Plane, XYZ } from "../../math";
import type { ISnap, MouseAndDetected, SnapResult } from "../snap";
export declare abstract class PlaneSnapBase implements ISnap {
    readonly refPoint?: (() => XYZ) | undefined;
    removeDynamicObject(): void;
    clear(): void;
    abstract snap(data: MouseAndDetected): SnapResult | undefined;
    constructor(refPoint?: (() => XYZ) | undefined);
    protected snapAtPlane(plane: Plane, data: MouseAndDetected): SnapResult | undefined;
}
export declare class WorkplaneSnap extends PlaneSnapBase {
    snap(data: MouseAndDetected): SnapResult | undefined;
}
export declare class PlaneSnap extends PlaneSnapBase {
    readonly plane: (point: XYZ) => Plane;
    constructor(plane: (point: XYZ) => Plane, refPoint?: () => XYZ);
    snap(data: MouseAndDetected): SnapResult | undefined;
}
