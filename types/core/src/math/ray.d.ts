import { Line } from "./line";
import { XYZ } from "./xyz";
export interface RayOptions {
    point: XYZ;
    direction: XYZ;
}
export declare class Ray {
    readonly point: XYZ;
    /**
     * unit vector
     */
    readonly direction: XYZ;
    constructor(options: RayOptions);
    toLine(): Line;
}
