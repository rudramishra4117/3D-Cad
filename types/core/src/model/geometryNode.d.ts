import type { IDocument } from "../document";
import { BoundingBox } from "../math";
import type { FaceMeshData, IShapeMeshData } from "../shape";
import { VisualNode } from "./visualNode";
export interface FaceMaterialPairOptions {
    faceIndex: number;
    materialIndex: number;
}
export declare class FaceMaterialPair {
    faceIndex: number;
    materialIndex: number;
    constructor(options: FaceMaterialPairOptions);
}
export interface GeometryNodeOptions {
    document: IDocument;
    name: string;
    materialId?: string | string[];
    id?: string;
}
export declare abstract class GeometryNode extends VisualNode {
    get materialId(): string | string[];
    set materialId(value: string | string[]);
    protected _originFaceMesh?: FaceMeshData;
    get faceMaterialPair(): FaceMaterialPair[];
    set faceMaterialPair(value: FaceMaterialPair[]);
    constructor(options: GeometryNodeOptions);
    protected _mesh: IShapeMeshData | undefined;
    get mesh(): IShapeMeshData;
    boundingBox(): BoundingBox | undefined;
    disposeInternal(): void;
    private copyOldValue;
    addFaceMaterial(
        pairs: {
            faceIndex: number;
            materialId: string;
        }[],
    ): void;
    removeFaceMaterial(faceIndexs: number[]): void;
    clearFaceMaterial(): void;
    private readonly updateVisual;
    protected abstract createMesh(): IShapeMeshData;
}
