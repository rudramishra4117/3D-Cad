import type { IDocument } from "../document";
import type { AsyncController } from "../foundation";
import type { I18nKeys } from "../i18n";
import type { XYZ } from "../math";
import type { SnapData, SnapEventHandler, SnapResult } from "../snap";
import type { CursorType } from "../visual";
export interface IStep {
    execute(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
}
export declare abstract class SnapStep<D extends SnapData> implements IStep {
    readonly tip: I18nKeys;
    private readonly handleStepData;
    private readonly keepSelected;
    protected cursor: CursorType;
    constructor(tip: I18nKeys, handleStepData: () => D, keepSelected?: boolean);
    execute(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
    private setValidator;
    protected abstract getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: D,
    ): SnapEventHandler;
    protected abstract validator(data: D, point: XYZ): boolean;
}
