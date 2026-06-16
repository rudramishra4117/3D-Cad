import {
    type BoundingBox,
    type GeometryNode,
    type IShape,
    type ISubShape,
    type IVisualGeometry,
    type Matrix4,
    type ShapeMeshRange,
    type ShapeType,
} from "@dronecad/core";
import { type Material, Mesh, type MeshLambertMaterial, Points, type PointsMaterial } from "three";
import type { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import type { ThreeVisualContext } from "./threeVisualContext";
import { ThreeVisualObject } from "./threeVisualObject";
export declare class ThreeGeometry extends ThreeVisualObject implements IVisualGeometry {
    readonly geometryNode: GeometryNode;
    readonly context: ThreeVisualContext;
    private _faceMaterial;
    private _edges?;
    private _faces?;
    private _vertexs?;
    constructor(geometryNode: GeometryNode, context: ThreeVisualContext);
    changeFaceMaterial(material: Material | Material[]): void;
    box(): import("three").Box3 | null | undefined;
    boundingBox(): BoundingBox | undefined;
    private readonly handleGeometryPropertyChanged;
    private generateShape;
    dispose(): void;
    private removeMeshes;
    private initVertexs;
    private initEdges;
    private initFaces;
    setFacesMateiralTemperary(material: MeshLambertMaterial): void;
    setEdgesMateiralTemperary(material: LineMaterial): void;
    setVertexsMateiralTemperary(material: PointsMaterial): void;
    removeTemperaryMaterial(): void;
    cloneSubEdge(index: number): LineSegments2 | undefined;
    cloneSubFace(
        index: number,
    ):
        | Mesh<
              import("three").BufferGeometry<
                  import("three").NormalBufferAttributes,
                  import("three").BufferGeometryEventMap
              >,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | undefined;
    faces():
        | Mesh<
              import("three").BufferGeometry<
                  import("three").NormalBufferAttributes,
                  import("three").BufferGeometryEventMap
              >,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | undefined;
    edges(): LineSegments2 | undefined;
    vertexs():
        | Points<
              import("three").BufferGeometry<
                  import("three").NormalBufferAttributes,
                  import("three").BufferGeometryEventMap
              >,
              Material<import("three").MaterialEventMap> | Material<import("three").MaterialEventMap>[],
              import("three").Object3DEventMap
          >
        | undefined;
    getSubShapeAndIndex(
        shapeType: "face" | "edge" | "vertex",
        subVisualIndex: number,
    ): {
        transform: Matrix4 | undefined;
        shape: IShape | undefined;
        subShape: ISubShape | undefined;
        index: number;
        groups: ShapeMeshRange[];
    };
    subShapeVisual(shapeType: ShapeType): (Mesh | LineSegments2 | Points)[];
    wholeVisual(): (Mesh | LineSegments2 | Points)[];
}
