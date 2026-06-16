import {
    BoundingBox,
    type ComponentNode,
    type GroupNode,
    type IShape,
    type ISubShape,
    type IVisualObject,
    type Matrix4,
    type MeshNode,
    type ShapeMeshRange,
    type ShapeType,
    type VisualNode,
} from "@dronecad/core";
import { BufferGeometry, Group, type Material, Mesh, Object3D, type Points } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import type { IHighlightable } from "./highlightable";
import type { ThreeVisualContext } from "./threeVisualContext";
export declare abstract class ThreeVisualObject extends Object3D implements IVisualObject {
    get transform(): Matrix4;
    set transform(value: Matrix4);
    private _node;
    get node(): VisualNode;
    private _locked;
    get locked(): boolean;
    set locked(value: boolean);
    worldTransform(): Matrix4;
    constructor(node: VisualNode);
    private readonly handlePropertyChanged;
    boundingBox(): BoundingBox | undefined;
    dispose(): void;
    abstract getSubShapeAndIndex(
        shapeType: "face" | "edge" | "vertex",
        subVisualIndex: number,
    ): {
        shape: IShape | undefined;
        subShape: ISubShape | undefined;
        index: number;
        transform?: Matrix4;
        groups: ShapeMeshRange[];
    };
    abstract subShapeVisual(shapeType: ShapeType): (Mesh | LineSegments2 | Points)[];
    abstract wholeVisual(): (Mesh | LineSegments2 | Points)[];
}
export declare class ThreeMeshObject extends ThreeVisualObject implements IHighlightable {
    readonly context: ThreeVisualContext;
    readonly meshNode: MeshNode;
    private _mesh;
    private material;
    get mesh():
        | LineSegments2
        | Mesh<
              BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | Line2;
    constructor(context: ThreeVisualContext, meshNode: MeshNode);
    highlight(): void;
    unhighlight(): void;
    getSubShapeAndIndex(
        shapeType: "face" | "edge",
        subVisualIndex: number,
    ): {
        shape: IShape | undefined;
        subShape: ISubShape | undefined;
        index: number;
        groups: ShapeMeshRange[];
    };
    subShapeVisual(shapeType: ShapeType): (Mesh | LineSegments2)[];
    private createMesh;
    private readonly handleGeometryPropertyChanged;
    private newMesh;
    private newLineSegments;
    private newLine;
    wholeVisual(): (
        | LineSegments2
        | Mesh<
              BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | Line2
    )[];
    private disposeMesh;
    dispose(): void;
}
export declare class GroupVisualObject extends Group implements IVisualObject {
    private readonly groupNode;
    get transform(): Matrix4;
    set transform(value: Matrix4);
    worldTransform(): Matrix4;
    private _locked;
    get locked(): boolean;
    set locked(value: boolean);
    constructor(groupNode: GroupNode);
    private readonly handlePropertyChanged;
    boundingBox(): BoundingBox | undefined;
    dispose(): void;
}
export declare class ThreeComponentObject extends ThreeVisualObject implements IHighlightable {
    readonly componentNode: ComponentNode;
    readonly context: ThreeVisualContext;
    private _boundbox?;
    private _edges?;
    private _faces?;
    private _linesegments?;
    private _surfaces?;
    get edges(): LineSegments2 | undefined;
    get faces():
        | Mesh<
              BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | undefined;
    get linesegments(): LineSegments2 | undefined;
    get surfaces():
        | Mesh<
              BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | undefined;
    constructor(componentNode: ComponentNode, context: ThreeVisualContext);
    private initEdges;
    private initFaces;
    initSurfaces(): void;
    initLinesegments(): void;
    boundingBox(): BoundingBox | undefined;
    highlight(): void;
    unhighlight(): void;
    getSubShapeAndIndex(
        shapeType: "face" | "edge",
        subVisualIndex: number,
    ):
        | {
              shape: ISubShape;
              subShape: ISubShape;
              transform: Matrix4 | undefined;
              index: number;
              groups: ShapeMeshRange[];
          }
        | {
              shape: undefined;
              subShape: undefined;
              transform: undefined;
              index: number;
              groups: never[];
          };
    subShapeVisual(shapeType: ShapeType): (Mesh | LineSegments2)[];
    wholeVisual(): (Mesh | LineSegments2)[];
}
