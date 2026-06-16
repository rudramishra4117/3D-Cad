import type { Line } from "./line";
import type { Matrix4 } from "./matrix4";
import type { Ray } from "./ray";
import { XYZ } from "./xyz";
export interface PlaneOptions {
    origin: XYZ;
    normal: XYZ;
    xvec: XYZ;
}
export declare class Plane {
    static readonly XY: Plane;
    static readonly YZ: Plane;
    static readonly ZX: Plane;
    readonly origin: XYZ;
    /**
     * unit vector
     */
    readonly normal: XYZ;
    readonly xvec: XYZ;
    readonly yvec: XYZ;
    constructor(options: PlaneOptions);
    translateTo(origin: XYZ): Plane;
    project(point: XYZ): XYZ;
    transformed(matrix: Matrix4): Plane;
    intersectLine(line: Line): XYZ | undefined;
    intersectRay(ray: Ray): XYZ | undefined;
    private lineIntersectParameter;
    projectDistance(p1: XYZ, p2: XYZ): number;
}
