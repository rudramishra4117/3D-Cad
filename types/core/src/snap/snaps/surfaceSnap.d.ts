import type { ISnap, MouseAndDetected, SnapResult } from "../snap";
export declare class SurfaceSnap implements ISnap {
    snap(data: MouseAndDetected): SnapResult | undefined;
    removeDynamicObject(): void;
    clear(): void;
}
