import type { Matrix4, XYZ } from "../math";
import type { LineType } from "./lineType";
import type { ISubShape } from "./shape";
export interface MeshGroupOptions {
    start: number;
    count: number;
    materialIndex: number;
}
export declare class MeshGroup {
    start: number;
    count: number;
    materialIndex: number;
    constructor(options: MeshGroupOptions);
}
export type MeshType = "surface" | "linesegments";
export interface MeshOptions {
    meshType?: MeshType;
    position?: Float32Array;
    normal?: Float32Array;
    index?: Uint32Array;
    color?: number | number[];
    uv?: Float32Array;
    groups?: MeshGroup[];
}
export declare class Mesh {
    constructor(options?: MeshOptions);
    static createSurface(positionSize: number, indexSize: number): Mesh;
    static createLineSegments(size: number): Mesh;
    meshType: MeshType;
    position: Float32Array | undefined;
    normal: Float32Array | undefined;
    index: Uint32Array | undefined;
    color: number | number[];
    uv: Float32Array | undefined;
    groups: MeshGroup[];
}
export interface IShapeMeshData {
    edges: EdgeMeshData | undefined;
    faces: FaceMeshData | undefined;
    vertexs: VertexMeshData | undefined;
}
export interface ShapeMeshRange {
    start: number;
    count: number;
    shape: ISubShape;
    transform?: Matrix4;
}
export interface ShapeMeshData {
    position: Float32Array;
    range: ShapeMeshRange[];
    color?: number | number[];
}
export interface MeshLike {
    position: Float32Array;
    index: Uint32Array;
    normal: Float32Array;
    uv: Float32Array;
    color?: number | number[];
}
export declare class MeshDataUtils {
    static isVertexMesh(data: ShapeMeshData): data is VertexMeshData;
    static isEdgeMesh(data: ShapeMeshData): data is EdgeMeshData;
    static isFaceMesh(data: ShapeMeshData): data is FaceMeshData;
    static createVertexMesh(point: XYZ, size: number, color: number): VertexMeshData;
    static createEdgeMesh(start: XYZ, end: XYZ, color: number, lineType: LineType): EdgeMeshData;
    static mergeEdgeMesh(data: EdgeMeshData, other: EdgeMeshData): EdgeMeshData;
    static mergeFaceMesh(data: FaceMeshData, other: FaceMeshData): FaceMeshData;
}
export interface VertexMeshData extends ShapeMeshData {
    size: number;
}
export interface EdgeMeshData extends ShapeMeshData {
    lineType: LineType;
    lineWidth?: number;
}
export declare function concatTypedArrays<T extends Float32Array | Uint32Array>(arrays: T[]): T;
export interface FaceMeshData extends ShapeMeshData {
    index: Uint32Array;
    normal: Float32Array;
    uv: Float32Array;
    groups: MeshGroup[];
}
export declare abstract class MeshDataBuilder<T extends ShapeMeshData> {
    protected readonly _positions: number[];
    protected readonly _groups: ShapeMeshRange[];
    protected _color: number | undefined;
    protected _vertexColor: number[] | undefined;
    setColor(color: number): void;
    addColor(r: number, g: number, b: number): this;
    protected getColor(): number | number[] | undefined;
    abstract newGroup(): this;
    abstract endGroup(shape: ISubShape): this;
    abstract addPosition(x: number, y: number, z: number): this;
    abstract build(): T;
}
/**
 * LineSegments
 */
export declare class EdgeMeshDataBuilder extends MeshDataBuilder<EdgeMeshData> {
    protected _positionStart: number;
    private _previousVertex;
    private _lineType;
    constructor();
    setType(type: LineType): void;
    newGroup(): this;
    endGroup(shape: ISubShape): this;
    addPosition(x: number, y: number, z: number): this;
    build(): EdgeMeshData;
}
export declare class FaceMeshDataBuilder extends MeshDataBuilder<FaceMeshData> {
    private _indexStart;
    private _groupStart;
    private readonly _normals;
    private readonly _uvs;
    private readonly _indices;
    constructor();
    newGroup(): this;
    endGroup(shape: ISubShape): this;
    addPosition(x: number, y: number, z: number): this;
    addNormal(x: number, y: number, z: number): this;
    addUV(u: number, v: number): this;
    addIndices(i1: number, i2: number, i3: number): this;
    build(): FaceMeshData;
}
