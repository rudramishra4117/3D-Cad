import type { BoundingBox, GeometryNode, IDisposable, Matrix4, VisualNode } from "@dronecad/core";
export interface IVisualObject extends IDisposable {
    locked: boolean;
    visible: boolean;
    transform: Matrix4;
    worldTransform(): Matrix4;
    boundingBox(): BoundingBox | undefined;
}
export interface INodeVisual extends IVisualObject {
    get node(): VisualNode;
}
export interface IVisualGeometry extends IVisualObject {
    get geometryNode(): GeometryNode;
}
export declare function isVisualGeometry(obj: IVisualObject): obj is IVisualGeometry;
