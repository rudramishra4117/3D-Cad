import { type Matrix4 } from "../math";
import { type EdgeMeshData, type FaceMeshData, type Mesh, type ShapeMeshData } from "../shape";
export declare class MeshUtils {
    static transformMesh<T extends ShapeMeshData>(data: T, matrix: Matrix4): T;
    static setFaceMeshData(
        data: FaceMeshData,
        other: FaceMeshData | undefined,
        matrix: Matrix4,
        offset: {
            facePosition: number;
            faceIndex: number;
        },
    ): void;
    static setSurfaceMeshData(
        data: Mesh,
        other: Mesh,
        matrix: Matrix4,
        offset: {
            meshPosition: number;
            meshIndex: number;
        },
        materialMap: Map<number, number>,
    ): void;
    static combineFaceMeshData(data: FaceMeshData, other: FaceMeshData | undefined, matrix: Matrix4): void;
    static concatFloat32Array(arr1: ArrayLike<number>, arr2: ArrayLike<number>): Float32Array<ArrayBuffer>;
    static setEdgeMeshData(
        data: EdgeMeshData,
        other: EdgeMeshData | undefined,
        matrix: Matrix4,
        offset: number,
    ): void;
    static combineEdgeMeshData(data: EdgeMeshData, other: EdgeMeshData | undefined, matrix: Matrix4): void;
    static mergeFaceMesh(mesh: FaceMeshData, materialMap: [number, number][]): FaceMeshData;
    private static mergeFaceMeshWithMap;
    private static mergeSameGroup;
    static subFace(mesh: FaceMeshData, index: number): FaceMeshData | undefined;
    static subFaceOutlines(face: FaceMeshData, index: number): Float32Array<ArrayBuffer> | undefined;
    static addEdge(
        pointsMap: Map<
            string,
            {
                count: number;
                points: number[];
            }
        >,
        face: {
            position: Float32Array;
        },
        i: number,
        j: number,
    ): void;
    static faceOutline(face: { position: Float32Array; index: Uint32Array }): Float32Array<ArrayBuffer>;
    static subEdge(mesh: EdgeMeshData, index: number): Float32Array<ArrayBuffer> | undefined;
}
