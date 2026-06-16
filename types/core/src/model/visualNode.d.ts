import type { I18nKeys } from "../i18n";
import { type BoundingBox, Matrix4 } from "../math";
import { Node } from "./node";
export declare abstract class VisualNode extends Node {
    abstract display(): I18nKeys;
    get transform(): Matrix4;
    set transform(value: Matrix4);
    worldTransform(): Matrix4;
    protected onVisibleChanged(): void;
    protected onParentVisibleChanged(): void;
    abstract boundingBox(): BoundingBox | undefined;
}
