import type { IDocument } from "../../document";
import type { AsyncController } from "../../foundation";
import { type XYZ } from "../../math";
import type { IView } from "../../visual";
import type { SnapResult } from "../snap";
import type { PointSnapData } from "./pointSnapEventHandler";
import { SnapEventHandler } from "./snapEventHandler";
export declare class AngleSnapEventHandler extends SnapEventHandler<PointSnapData> {
    private readonly center;
    private readonly planeAngle;
    private readonly plane;
    constructor(
        document: IDocument,
        controller: AsyncController,
        center: () => XYZ,
        p1: XYZ,
        snapPointData: PointSnapData,
    );
    private readonly formatAnglePrompt;
    protected inputError(text: string): "error.input.invalidNumber" | undefined;
    protected getPointFromInput(view: IView, text: string): SnapResult;
}
