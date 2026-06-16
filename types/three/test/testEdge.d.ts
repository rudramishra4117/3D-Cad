import {
    type BoundingBox,
    type EdgeMeshData,
    type I18nKeys,
    type ICurve,
    type IDocument,
    type IEdge,
    type IEqualityComparer,
    type IShape,
    type IShapeMeshData,
    type ITrimmedCurve,
    type IWire,
    type Line,
    Matrix4,
    type Orientation,
    type OrientedBoundingBox,
    ParameterShapeNode,
    type Plane,
    Result,
    type ShapeType,
    type XYZ,
    type XYZLike,
} from "@dronecad/core";
export declare class TestEdge implements IEdge {
    readonly start: XYZ;
    readonly end: XYZ;
    constructor(start: XYZ, end: XYZ);
    transformed(matrix: Matrix4): IShape;
    transformedMul(matrix: Matrix4): IShape;
    edgesMeshPosition(): EdgeMeshData;
    clone(): IShape;
    dispose(): void;
    update(curve: ICurve): void;
    trim(start: number, end: number): IEdge;
    isClosed(): boolean;
    isNull(): boolean;
    reserve(): void;
    section(shape: IShape | Plane): IShape;
    splitByWire(edges: (IEdge | IWire)[]): IShape;
    split(shapes: IShape[]): IShape;
    findAncestor(ancestorType: ShapeType, fromShape: IShape): IShape[];
    findSubShapes(subshapeType: ShapeType): IShape[];
    directSubShapes(): IShape[];
    offset(distance: number, dir: XYZ): Result<IEdge>;
    hlr(position: XYZLike, direction: XYZLike, xDir: XYZLike): IShape;
    intersect(other: IEdge | Line): never[];
    length(): number;
    get curve(): ITrimmedCurve;
    get id(): string;
    boundingBox(): BoundingBox;
    orientedBoundingBox(): OrientedBoundingBox;
    shapeType: ShapeType;
    matrix: Matrix4;
    get mesh(): IShapeMeshData;
    orientation(): Orientation;
    isPartner(other: IShape): boolean;
    isSame(other: IShape): boolean;
    isEqual(other: IShape): boolean;
}
export declare class TestNode extends ParameterShapeNode {
    readonly start: XYZ;
    readonly end: XYZ;
    display(): I18nKeys;
    constructor(document: IDocument, start: XYZ, end: XYZ);
    protected setProperty<K extends keyof this>(
        property: K,
        newValue: this[K],
        onPropertyChanged?: ((property: K, oldValue: this[K]) => void) | undefined,
        equals?: IEqualityComparer<this[K]> | undefined,
    ): boolean;
    generateShape(): Result<IShape>;
}
