import type { IDocument } from "../document";
import type { IDisposable, IPropertyChanged } from "../foundation";
import type { Plane, Ray, XY, XYLike, XYZ, XYZLike } from "../math";
import type { INode } from "../model";
import type { INodeFilter, IShapeFilter } from "../selectionFilter";
import type { ShapeType } from "../shape";
import type { ICameraController } from "./cameraController";
import type { VisualShapeData } from "./detectedData";
import type { IVisualObject } from "./visualObject";
export declare const ViewModes: readonly ["solid", "wireframe", "solidAndWireframe"];
export type ViewMode = (typeof ViewModes)[number];
export declare const ViewModeI18nKeys: {
    solid: "viewport.mode.solid";
    wireframe: "viewport.mode.wireframe";
    solidAndWireframe: "viewport.mode.solidAndWireframe";
};
export type HtmlTextOptions = {
    hideDelete?: boolean;
    className?: string;
    center?: XYLike;
    onDispose?: () => void;
};
export interface IView extends IPropertyChanged, IDisposable {
    readonly document: IDocument;
    readonly cameraController: ICameraController;
    get isClosed(): boolean;
    get width(): number;
    get height(): number;
    get dom(): HTMLElement | undefined;
    mode: ViewMode;
    name: string;
    workplane: Plane;
    update(): void;
    up(): XYZ;
    toImage(): string;
    direction(): XYZ;
    rayAt(mx: number, my: number): Ray;
    screenToWorld(mx: number, my: number): XYZ;
    worldToScreen(point: XYZ): XY;
    isolate(nodes: INode[]): void;
    unisolate(): void;
    resize(width: number, heigth: number): void;
    setDom(element: HTMLElement): void;
    htmlText(text: string, point: XYZLike, options?: HtmlTextOptions): IDisposable;
    close(): void;
    detectVisual(x: number, y: number, nodeFilter?: INodeFilter): IVisualObject[];
    detectVisualRect(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        nodeFilter?: INodeFilter,
    ): IVisualObject[];
    detectShapes(
        shapeType: ShapeType,
        x: number,
        y: number,
        shapeFilter?: IShapeFilter,
        nodeFilter?: INodeFilter,
    ): VisualShapeData[];
    detectShapesRect(
        shapeType: ShapeType,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        shapeFilter?: IShapeFilter,
        nodeFilter?: INodeFilter,
    ): VisualShapeData[];
}
export declare function screenDistance(view: IView, mx: number, my: number, point: XYZ): number;
