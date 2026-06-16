import type { IDocument } from "../document";
import { type IEqualityComparer, Result } from "../foundation";
import { type I18nKeys } from "../i18n";
import { Matrix4 } from "../math";
import {
    type EdgeMeshData,
    type FaceMeshData,
    type IShape,
    type IShapeMeshData,
    type VertexMeshData,
} from "../shape";
import { GeometryNode } from "./geometryNode";
export declare abstract class ShapeNode extends GeometryNode {
    protected _shape: Result<IShape>;
    get shape(): Result<IShape>;
    get shapeType(): string;
    protected setShape(shape: Result<IShape>): void;
    protected createMesh(): IShapeMeshData;
    disposeInternal(): void;
}
export declare class MultiShapeMesh implements IShapeMeshData {
    private readonly _vertexs;
    private readonly _edges;
    private readonly _faces;
    get vertexs(): VertexMeshData | undefined;
    get edges(): EdgeMeshData | undefined;
    get faces(): FaceMeshData | undefined;
    constructor();
    addShape(shape: IShape, matrix: Matrix4): void;
}
export interface MultiShapeNodeOptions {
    document: IDocument;
    name: string;
    shapes: IShape[];
    materialId?: string;
    id?: string;
}
export declare class MultiShapeNode extends GeometryNode {
    private readonly _shapes;
    get shapes(): ReadonlyArray<IShape>;
    constructor(options: MultiShapeNodeOptions);
    protected createMesh(): IShapeMeshData;
    display(): I18nKeys;
}
export interface ParameterShapeNodeOptions {
    document: IDocument;
    materialId?: string;
    id?: string;
}
export declare abstract class ParameterShapeNode extends ShapeNode {
    get shape(): Result<IShape>;
    protected setPropertyEmitShapeChanged<K extends keyof this>(
        property: K,
        newValue: this[K],
        onPropertyChanged?: (property: K, oldValue: this[K]) => void,
        equals?: IEqualityComparer<this[K]> | undefined,
    ): boolean;
    constructor(options: ParameterShapeNodeOptions);
    protected abstract generateShape(): Result<IShape>;
}
export interface EditableShapeNodeOptions {
    document: IDocument;
    name: string;
    shape: IShape | Result<IShape>;
    materialId?: string | string[];
    id?: string;
}
export declare class EditableShapeNode extends ShapeNode {
    display(): I18nKeys;
    get shape(): Result<IShape>;
    set shape(shape: Result<IShape>);
    constructor(options: EditableShapeNodeOptions);
}
