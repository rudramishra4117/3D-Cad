import type { IDocument } from "../document";
import type { I18nKeys } from "../i18n";
import { BoundingBox, type XYZ } from "../math";
import { type EdgeMeshData, type FaceMeshData, Mesh } from "../shape";
import { VisualNode } from "./visualNode";
export type ComponentMesh = {
    faceMaterials: string[];
    edge: EdgeMeshData;
    face: FaceMeshData;
    linesegments: Mesh;
    surfaceMaterials: string[];
    surface: Mesh;
};
export declare function createComponentMesh(size: ComponentSize): ComponentMesh;
export type ComponentSize = {
    facePosition: number;
    faceIndex: number;
    edge: number;
    lineSegment: number;
    meshPosition: number;
    meshIndex: number;
};
export declare function createComponentSize(): ComponentSize;
export interface ComponentOptions {
    name: string;
    nodes: ReadonlyArray<VisualNode>;
    origin?: XYZ;
    id?: string;
}
export declare class Component {
    private readonly _nodes;
    get nodes(): ReadonlyArray<VisualNode>;
    private readonly _name;
    get name(): string;
    readonly id: string;
    private _origin;
    get origin(): XYZ;
    set origin(value: XYZ);
    private _boundingBox?;
    get boundingBox(): BoundingBox | undefined;
    private _mesh?;
    get mesh(): ComponentMesh;
    instances: ComponentNode[];
    constructor(options: ComponentOptions);
    toString(): string;
    private mergeMesh;
    private getSize;
    private readonly mergeNodesMesh;
    private mergeShapeNode;
    private mergeFaceMaterial;
    private mergeMeshNode;
    private mapOldNewMaterialIndex;
    private computeBoundingBox;
}
export interface ComponentNodeOptions {
    document: IDocument;
    name: string;
    componentId: string;
    insert: XYZ;
    id?: string;
}
export declare class ComponentNode extends VisualNode {
    display(): I18nKeys;
    boundingBox(): BoundingBox | undefined;
    private _component?;
    get component(): Component;
    readonly componentId: string;
    readonly insert: XYZ;
    constructor(options: ComponentNodeOptions);
}
