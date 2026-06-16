import {
    CancelableCommand,
    type IShape,
    type IShapeFactory,
    type IStep,
    type IView,
    Result,
    type SnapResult,
    type XYZ,
} from "@dronecad/core";
export declare abstract class MultistepCommand extends CancelableCommand {
    protected stepDatas: SnapResult[];
    protected canExcute(): Promise<boolean>;
    protected onRestarting(): void;
    protected executeAsync(): Promise<void>;
    protected executeSteps(): Promise<boolean>;
    protected resetStepDatas(): void;
    protected meshPoint(point: XYZ): import("@dronecad/core").VertexMeshData;
    protected meshLine(
        start: XYZ,
        end: XYZ,
        color?: number,
        lineWith?: number,
    ): import("@dronecad/core").EdgeMeshData;
    protected meshCreatedShape<K extends keyof IShapeFactory>(
        method: K,
        ...args: Parameters<IShapeFactory[K] extends (...args: any) => any ? IShapeFactory[K] : never>
    ): import("@dronecad/core").EdgeMeshData;
    protected meshShape(
        shape: IShape | Result<IShape>,
        disposeShape?: boolean,
    ): import("@dronecad/core").EdgeMeshData;
    protected findPlane(view: IView, origin: XYZ, point: XYZ | undefined): import("@dronecad/core").Plane;
    protected transformdFirstShape(step: SnapResult, shouldDispose?: boolean): IShape;
    protected transformdShapes(step: SnapResult, shouldDispose?: boolean): IShape[];
    protected abstract getSteps(): IStep[];
    protected abstract executeMainTask(): void;
}
