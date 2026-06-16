import { type IViewGizmo } from "@dronecad/core";
import { Vector3 } from "three";
import type { CameraController } from "./cameraController";
import type { ThreeView } from "./threeView";
export interface Axis {
    axis: string;
    direction: Vector3;
    size: number;
    position: Vector3;
    color: string[];
    lineWidth?: number;
    label?: string;
}
export declare class ViewGizmo extends HTMLElement implements IViewGizmo {
    readonly view: ThreeView;
    private readonly _axes;
    private readonly _center;
    private readonly _canvas;
    private readonly _context;
    readonly cameraController: CameraController;
    private _canClick;
    private _selectedAxis?;
    private _mouse?;
    constructor(view: ThreeView);
    setDom(dom: HTMLElement): void;
    dispose(): void;
    private _initStyle;
    private _initCanvas;
    private _initAxes;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly _onPointerMove;
    private readonly _onPointerDown;
    private readonly _onPointerUp;
    private readonly _onPointerOut;
    private readonly _onPointerEnter;
    private readonly _onClick;
    clear(): void;
    update(): void;
    private setSelectedAxis;
    drawAxes(axes: Axis[]): void;
    private getAxisColor;
    private drawCircle;
    private drawLine;
    private drawLabel;
    private getBubblePosition;
}
