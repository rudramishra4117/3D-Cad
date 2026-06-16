import type { IDocument } from "../../document";
import { type IView } from "../../visual";
import type { SnapResult, SnapType } from "../snap";
import { Axis } from "./axis";
import { TrackingBase } from "./trackingBase";
export interface ObjectTrackingAxis {
    axes: Axis[];
    snapType: SnapType;
    objectName: string | undefined;
}
export declare class ObjectTracking extends TrackingBase {
    private timer?;
    private snapping?;
    private readonly trackings;
    constructor(trackingZ: boolean);
    clear(): void;
    getTrackingRays(view: IView): ObjectTrackingAxis[];
    showTrackingAtTimeout(document: IDocument, snap?: SnapResult): void;
    private clearTimer;
    private switchTrackingPoint;
    private removeTrackingPoint;
    private addTrackingPoint;
}
