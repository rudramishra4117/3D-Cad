import type { IDocument } from "../../document";
import { type XYZ } from "../../math";
import type { ISnap, MouseAndDetected, SnapResult, SnapType } from "../";
import type { Axis } from "./axis";
export interface TrackingData {
    axis: Axis;
    point: XYZ;
    isObjectTracking: boolean;
    distance: number;
    info: string;
    snapType: SnapType;
}
export declare class TrackingSnap implements ISnap {
    readonly referencePoint: (() => XYZ) | undefined;
    private readonly _axisTracking;
    private readonly _objectTracking;
    private readonly _tempLines;
    constructor(referencePoint: (() => XYZ) | undefined, trackingAxisZ: boolean);
    readonly handleSnaped: (document: IDocument, snaped?: SnapResult) => void;
    snap(data: MouseAndDetected): SnapResult | undefined;
    private trackingIntersectTracking;
    private getSnapedAndShowTracking;
    private showTempLine;
    private shapeIntersectTracking;
    private findIntersection;
    private detectTracking;
    private getSnapedFromAxes;
    private rayDistanceAtScreen;
    removeDynamicObject(): void;
    private readonly onSnapTypeChanged;
    clear(): void;
}
