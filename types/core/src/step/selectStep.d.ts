import type { IDocument } from "../document";
import type { AsyncController } from "../foundation";
import type { I18nKeys } from "../i18n";
import type { INodeFilter, IShapeFilter } from "../selectionFilter";
import type { ShapeType } from "../shape";
import type { SnapResult } from "../snap";
import type { VisualState } from "../visual";
import type { IStep } from "./step";
export interface SelectShapeOptions {
    multiple?: boolean;
    nodeFilter?: INodeFilter;
    shapeFilter?: IShapeFilter;
    selectedState?: VisualState;
    highlightState?: VisualState;
    keepSelection?: boolean;
}
export interface SelectNodeOptions {
    multiple?: boolean;
    filter?: INodeFilter;
    keepSelection?: boolean;
}
export declare abstract class SelectStep implements IStep {
    readonly snapeType: ShapeType;
    readonly prompt: I18nKeys;
    readonly options?: SelectShapeOptions | undefined;
    constructor(snapeType: ShapeType, prompt: I18nKeys, options?: SelectShapeOptions | undefined);
    execute(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
    abstract select(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
}
export declare class SelectShapeStep extends SelectStep {
    select(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
}
export declare class SelectNodeStep implements IStep {
    readonly prompt: I18nKeys;
    readonly options?: SelectNodeOptions | undefined;
    constructor(prompt: I18nKeys, options?: SelectNodeOptions | undefined);
    execute(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
}
export declare class GetOrSelectNodeStep extends SelectNodeStep {
    execute(document: IDocument, controller: AsyncController): Promise<SnapResult | undefined>;
}
