import {
    type HtmlTextOptions,
    type IDisposable,
    type IDocument,
    type INode,
    type INodeFilter,
    type IShapeFilter,
    type IView,
    type IViewGizmo,
    type IVisualObject,
    Observable,
    type Plane,
    Ray,
    type ShapeType,
    type ViewMode,
    type VisualShapeData,
    XY,
    type XYZ,
    type XYZLike,
} from "@dronecad/core";
import { DirectionalLight, OrthographicCamera, PerspectiveCamera, Vector2, WebGLRenderer } from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { CameraController } from "./cameraController";
import type { ThreeHighlighter } from "./threeHighlighter";
import type { ThreeVisualContext } from "./threeVisualContext";
export declare class ThreeView extends Observable implements IView {
    readonly document: IDocument;
    readonly highlighter: ThreeHighlighter;
    readonly content: ThreeVisualContext;
    private _dom?;
    private _needsUpdate;
    private readonly _scene;
    private readonly _renderer;
    private readonly _cssRenderer;
    private readonly _workplane;
    private readonly _gizmo;
    private readonly _resizeObserver;
    private _isolatedNodes?;
    readonly cameraController: CameraController;
    readonly dynamicLight: DirectionalLight;
    get name(): string;
    set name(value: string);
    get dom(): HTMLElement | undefined;
    private _isClosed;
    get isClosed(): boolean;
    get camera(): PerspectiveCamera | OrthographicCamera;
    get mode(): ViewMode;
    set mode(value: ViewMode);
    constructor(
        document: IDocument,
        name: string,
        workplane: Plane,
        highlighter: ThreeHighlighter,
        content: ThreeVisualContext,
    );
    disposeInternal(): void;
    close(): void;
    private readonly _resizerObserverCallback;
    get renderer(): WebGLRenderer;
    protected initRenderer(): WebGLRenderer;
    protected initCssRenderer(): CSS2DRenderer;
    protected initGizmo(): IViewGizmo;
    setDom(element: HTMLElement): void;
    htmlText(text: string, point: XYZLike, options?: HtmlTextOptions): IDisposable;
    private htmlElement;
    toImage(): string;
    get workplane(): Plane;
    set workplane(value: Plane);
    update(): void;
    private animate;
    resize(width: number, height: number): void;
    get width(): number;
    get height(): number;
    screenToCameraRect(mx: number, my: number): Vector2;
    rayAt(mx: number, my: number): Ray;
    screenToWorld(mx: number, my: number): XYZ;
    worldToScreen(point: XYZ): XY;
    direction(): XYZ;
    up(): XYZ;
    private mouseToWorld;
    isolate(nodes: INode[]): void;
    unisolate(): void;
    detectVisual(x: number, y: number, nodeFilter?: INodeFilter): IVisualObject[];
    detectVisualRect(
        mx1: number,
        my1: number,
        mx2: number,
        my2: number,
        nodeFilter?: INodeFilter,
    ): IVisualObject[];
    private getNodeFromObject;
    private initSelectionBox;
    detectShapesRect(
        shapeType: ShapeType,
        mx1: number,
        my1: number,
        mx2: number,
        my2: number,
        shapeFilter?: IShapeFilter,
        nodeFilter?: INodeFilter,
    ): VisualShapeData[];
    private addDetectedShape;
    private getParentNode;
    detectShapes(
        shapeType: ShapeType,
        mx: number,
        my: number,
        shapeFilter?: IShapeFilter,
        nodeFilter?: INodeFilter,
    ): VisualShapeData[];
    private detectThreeShapes;
    private detectSubShapes;
    private getSubShapeFromInsection;
    private getAncestorAndIndex;
    private findIndex;
    private findShapeAndIndex;
    private findIntersectedNodes;
    private findIntersectedShapes;
    private initIntersectableShapes;
    private initRaycaster;
}
