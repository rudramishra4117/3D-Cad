import type { IDocument } from "../document";
import { type AsyncController } from "../foundation";
import type { XYZ } from "../math";
import {
    type LengthAtAxisSnapData,
    SnapLengthAtAxisHandler,
    type SnapLengthAtPlaneData,
    SnapLengthAtPlaneHandler,
} from "../snap";
import { SnapStep } from "./step";
export declare class LengthAtAxisStep extends SnapStep<LengthAtAxisSnapData> {
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: LengthAtAxisSnapData,
    ): SnapLengthAtAxisHandler;
    protected validator(data: LengthAtAxisSnapData, point: XYZ): boolean;
}
export declare class LengthAtPlaneStep extends SnapStep<SnapLengthAtPlaneData> {
    protected getEventHandler(
        document: IDocument,
        controller: AsyncController,
        data: SnapLengthAtPlaneData,
    ): SnapLengthAtPlaneHandler;
    protected validator(data: SnapLengthAtPlaneData, point: XYZ): boolean;
}
