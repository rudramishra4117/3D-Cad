import {
    BoundingBox,
    type EdgeMeshData,
    type FaceMeshData,
    type ICompound,
    type ICompoundSolid,
    type ICurve,
    type IDisposable,
    type IEdge,
    type IFace,
    type IShape,
    type IShapeMeshData,
    type IShell,
    type ISolid,
    type ISubEdgeShape,
    type ISubFaceShape,
    type ISubVertexShape,
    type ISurface,
    type ITrimmedCurve,
    type IVertex,
    type IWire,
    type JoinType,
    Line,
    type Matrix4,
    type Orientation,
    type OrientedBoundingBox,
    Plane,
    Result,
    type ShapeType,
    type VertexMeshData,
    type XYZ,
    type XYZLike,
} from "@dronecad/core";
import type {
    TopoDS_Compound,
    TopoDS_CompSolid,
    TopoDS_Edge,
    TopoDS_Face,
    TopoDS_Shape,
    TopoDS_Shell,
    TopoDS_Solid,
    TopoDS_Vertex,
    TopoDS_Wire,
} from "../lib/dronecad-wasm";
export interface OccShapeOptions {
    shape: TopoDS_Shape;
}
export declare class OccShape implements IShape {
    #private;
    private _boundingBox;
    private _orientedBoundingBox;
    readonly shapeType: ShapeType;
    protected _mesh: IShapeMeshData | undefined;
    get mesh(): IShapeMeshData;
    protected _shape: TopoDS_Shape;
    get shape(): TopoDS_Shape;
    readonly id: string;
    get matrix(): Matrix4;
    set matrix(matrix: Matrix4);
    constructor(options: OccShapeOptions);
    static wrap(shape: TopoDS_Shape): IShape;
    boundingBox(): BoundingBox;
    orientedBoundingBox(): OrientedBoundingBox;
    transformed(matrix: Matrix4): IShape;
    transformedMul(matrix: Matrix4): IShape;
    protected onTransformChanged(): void;
    edgesMeshPosition(): EdgeMeshData;
    clone(): IShape;
    isClosed(): boolean;
    isNull(): boolean;
    isEqual(other: IShape): boolean;
    isSame(other: IShape): boolean;
    isPartner(other: IShape): boolean;
    orientation(): Orientation;
    findAncestor(ancestorType: ShapeType, fromShape: IShape): IShape[];
    findSubShapes(subshapeType: ShapeType): IShape[];
    directSubShapes(): IShape[];
    section(shape: IShape | Plane): IShape;
    split(shapes: IShape[]): IShape;
    reserve(): void;
    hlr(position: XYZLike, direction: XYZLike, xDir: XYZLike): IShape;
    readonly dispose: () => void;
    protected disposeInternal(): void;
}
export interface OccVertexOptions {
    shape: TopoDS_Vertex;
    id?: string;
}
export declare class OccVertex extends OccShape implements IVertex {
    readonly vertex: TopoDS_Vertex;
    constructor(options: OccVertexOptions);
    point(): XYZ;
}
export interface OccEdgeOptions {
    shape: TopoDS_Edge;
    id?: string;
}
export declare class OccEdge extends OccShape implements IEdge {
    private _edge;
    get edge(): TopoDS_Edge;
    constructor(options: OccEdgeOptions);
    update(curve: ICurve): void;
    intersect(other: IEdge | Line): {
        parameter: number;
        point: XYZ;
    }[];
    length(): number;
    private _curve;
    get curve(): ITrimmedCurve;
    protected onTransformChanged(): void;
    offset(distance: number, dir: XYZ): Result<IEdge>;
    trim(start: number, end: number): IEdge;
    protected disposeInternal(): void;
}
export interface OccWireOptions {
    shape: TopoDS_Wire;
    id?: string;
}
export declare class OccWire extends OccShape implements IWire {
    readonly wire: TopoDS_Wire;
    constructor(options: OccWireOptions);
    edgeLoop(): IEdge[];
    toFace(): Result<IFace>;
    offset(distance: number, joinType: JoinType): Result<IShape>;
}
export interface OccFaceOptions {
    shape: TopoDS_Face;
    id?: string;
}
export declare class OccFace extends OccShape implements IFace {
    readonly face: TopoDS_Face;
    constructor(options: OccFaceOptions);
    area(): number;
    normal(u: number, v: number): [point: XYZ, normal: XYZ];
    outerWire(): IWire;
    surface(): ISurface;
    segmentsOfEdgeOnFace(edge: IEdge):
        | undefined
        | {
              start: number;
              end: number;
          };
}
export interface OccShellOptions {
    shape: TopoDS_Shell;
    id?: string;
}
export declare class OccShell extends OccShape implements IShell {
    constructor(options: OccShellOptions);
}
export interface OccSolidOptions {
    shape: TopoDS_Solid;
    id?: string;
}
export declare class OccSolid extends OccShape implements ISolid {
    readonly solid: TopoDS_Solid;
    constructor(options: OccSolidOptions);
    volume(): number;
}
export interface OccCompSolidOptions {
    shape: TopoDS_CompSolid;
    id?: string;
}
export declare class OccCompSolid extends OccShape implements ICompoundSolid {
    constructor(options: OccCompSolidOptions);
}
export interface OccCompoundOptions {
    shape: TopoDS_Compound;
    id?: string;
}
export declare class OccCompound extends OccShape implements ICompound {
    constructor(options: OccCompoundOptions);
}
export interface OccSubVertexShapeOptions {
    parent: IShape;
    shape: TopoDS_Vertex;
    index: number;
    id?: string;
}
export declare class OccSubVertexShape extends OccVertex implements ISubVertexShape {
    get mesh(): IShapeMeshData;
    readonly parent: IShape;
    readonly index: number;
    constructor(options: OccSubVertexShapeOptions);
}
export interface OccSubEdgeShapeOptions {
    parent: IShape;
    shape: TopoDS_Edge;
    index: number;
    id?: string;
}
export declare class OccSubEdgeShape extends OccEdge implements ISubEdgeShape {
    get mesh(): IShapeMeshData;
    readonly parent: IShape;
    readonly index: number;
    constructor(options: OccSubEdgeShapeOptions);
}
export interface OccSubFaceShapeOptions {
    parent: IShape;
    shape: TopoDS_Face;
    index: number;
    id?: string;
}
export declare class OccSubFaceShape extends OccFace implements ISubFaceShape {
    get mesh(): IShapeMeshData;
    readonly parent: IShape;
    readonly index: number;
    constructor(options: OccSubFaceShapeOptions);
}
export declare class Mesher implements IShapeMeshData, IDisposable {
    private shape;
    private _isMeshed;
    private _lines?;
    private _faces?;
    private _points?;
    get edges(): EdgeMeshData | undefined;
    set edges(value: EdgeMeshData | undefined);
    get faces(): FaceMeshData | undefined;
    set faces(value: FaceMeshData | undefined);
    get vertexs(): VertexMeshData | undefined;
    set vertexs(value: VertexMeshData | undefined);
    constructor(shape: OccShape);
    private mesh;
    private parseFaceMeshData;
    private parseEdgeMeshData;
    dispose(): void;
    private getEdgeRanges;
    private getFaceRanges;
}
