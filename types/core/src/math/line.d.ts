import { XYZ } from "./xyz";
export interface LineOptions {
    point: XYZ;
    direction: XYZ;
}
export declare class Line {
    readonly point: XYZ;
    /**
     * unit vector
     */
    readonly direction: XYZ;
    constructor(options: LineOptions);
    intersect(right: Line, tolerance?: number): XYZ | undefined;
    distanceTo(right: Line): number;
    nearestTo(right: Line): XYZ;
    nearestToPoint(point: XYZ): XYZ;
}
