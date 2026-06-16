import type { IDocument } from "../document";
import { type AsyncController } from "../foundation";
import type { I18nKeys } from "../i18n";
import type { XYZ } from "../math";
import { AngleSnapEventHandler, type PointSnapData } from "../snap";
import { SnapStep } from "./step";
export declare class AngleStep extends SnapStep<PointSnapData> {
    private readonly handleCenter;
    private readonly handleP1;
    constructor(
        tip: I18nKeys,
        handleCenter: () => XYZ,
        handleP1: () => XYZ,
        handleP2Data?: () => PointSnapData,
        keepSelected?: boolean,
    );
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: PointSnapData,
    ): AngleSnapEventHandler;
    protected validator(data: PointSnapData, point: XYZ): boolean;
}
