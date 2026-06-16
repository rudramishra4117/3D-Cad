import type { Plane } from "./plane";
import type { XYZ } from "./xyz";
export declare class PlaneAngle {
    readonly plane: Plane;
    private lastX;
    private lastY;
    private isNegativeRotation;
    private currentAngle;
    get angle(): number;
    constructor(plane: Plane);
    movePoint(point: XYZ): void;
    private calculateAngle;
    private isCrossingPositiveXAxis;
    private updateLastProjections;
}
