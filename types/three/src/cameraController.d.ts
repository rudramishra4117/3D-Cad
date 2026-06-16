import {
    type CameraType,
    type ICameraController,
    Observable,
    type ViewMode,
    type XYZLike,
} from "@dronecad/core";
import { Camera, OrthographicCamera, PerspectiveCamera, Vector3 } from "three";
import type { ThreeView } from "./threeView";
export declare class CameraController extends Observable implements ICameraController {
    readonly view: ThreeView;
    private _width;
    private _height;
    private _target;
    private _position;
    private _rotateCenter;
    private _camera;
    get cameraType(): CameraType;
    set cameraType(value: CameraType);
    get target(): Vector3;
    set target(value: Vector3);
    get cameraPosition(): import("@dronecad/core").XYZ;
    get cameraTarget(): import("@dronecad/core").XYZ;
    get cameraUp(): import("@dronecad/core").XYZ;
    get camera(): PerspectiveCamera | OrthographicCamera;
    constructor(view: ThreeView);
    private createCamera;
    setCameraLayer(camera: Camera, mode: ViewMode): void;
    pan(dx: number, dy: number): void;
    updateCameraPosionTarget(): void;
    setSize(width: number, height: number): void;
    private updateOrthographicCamera;
    startRotate(x: number, y: number): void;
    rotate(dx: number, dy: number): void;
    private getRotation;
    fitContent(): void;
    private getBoundingSphere;
    zoom(x: number, y: number, delta: number): void;
    private caclueZoomFactor;
    private updateCameraNearFar;
    private caculePerspectiveCameraMouse;
    lookAt(eye: XYZLike, target: XYZLike, up: XYZLike): void;
    private mouseToWorld;
}
