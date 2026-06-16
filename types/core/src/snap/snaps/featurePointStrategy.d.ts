import { type ObjectSnapType } from "../../snapType";
import type { IView, VisualShapeData } from "../../visual";
import type { SnapResult } from "../snap";
export declare class FeaturePointStrategy {
    private _snapType;
    private readonly _featureInfos;
    constructor(_snapType: ObjectSnapType);
    getFeaturePoints(view: IView, shape: VisualShapeData): SnapResult[];
    private getVertexFeaturePoints;
    private getEdgeFeaturePoints;
    clear(): void;
    updateSnapType(snapType: ObjectSnapType): void;
}
