import type { EdgeMeshData, FaceMeshData, MeshLike, VertexMeshData } from "@dronecad/core";
import {
    BufferGeometry,
    type LineBasicMaterial,
    Mesh,
    MeshLambertMaterial,
    Points,
    PointsMaterial,
} from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
export declare class ThreeGeometryFactory {
    static createVertexGeometry(
        data: VertexMeshData,
    ): Points<
        BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
        PointsMaterial,
        import("three").Object3DEventMap
    >;
    static createVertexMaterial(data: VertexMeshData): PointsMaterial;
    static createFaceGeometry(
        data: FaceMeshData,
        opacity?: number,
    ): Mesh<
        BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>,
        MeshLambertMaterial,
        import("three").Object3DEventMap
    >;
    static createMeshMaterial(opacity: number | undefined): MeshLambertMaterial;
    static setColor(
        buffer: BufferGeometry,
        data: {
            color?: number | number[];
        },
        material: MeshLambertMaterial | PointsMaterial | LineMaterial | LineBasicMaterial,
    ): void;
    static createFaceBufferGeometry(
        data: MeshLike,
    ): BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>;
    static createEdgeGeometry(data: EdgeMeshData): LineSegments2;
    static createEdgeMaterial(data: EdgeMeshData): LineMaterial;
    static createEdgeBufferGeometry(data: EdgeMeshData): LineSegmentsGeometry;
    static createVertexBufferGeometry(
        data: VertexMeshData,
    ): BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>;
}
