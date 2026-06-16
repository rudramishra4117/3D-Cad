import {
    type EdgeMeshData,
    type INode,
    type IShapeFilter,
    type IVisual,
    type IVisualContext,
    type IVisualObject,
    type Matrix4,
    type MeshLike,
    type NodeRecord,
    type ShapeMeshData,
    type ShapeType,
    type XYZ,
} from "@dronecad/core";
import { Group, Object3D, type Scene, type Material as ThreeMaterial } from "three";
export declare class ThreeVisualContext implements IVisualContext {
    readonly visual: IVisual;
    readonly scene: Scene;
    private readonly _visualNodeMap;
    private readonly _NodeVisualMap;
    readonly materialMap: Map<string, ThreeMaterial<import("three").MaterialEventMap>>;
    readonly visualShapes: Group;
    readonly tempShapes: Group;
    readonly cssObjects: Group;
    constructor(visual: IVisual, scene: Scene);
    private readonly onMaterialCollectionChanged;
    private createThreeMaterial;
    private removeThreeMaterial;
    private readonly onMaterialPropertyChanged;
    private setTextureValue;
    readonly handleNodeChanged: (records: NodeRecord[]) => void;
    addVisualObject(object: IVisualObject): void;
    removeVisualObject(object: IVisualObject): void;
    dispose(): void;
    getNode(visual: IVisualObject): INode | undefined;
    redrawNode(models: INode[]): void;
    get shapeCount(): number;
    getVisual(nodel: INode): IVisualObject | undefined;
    visuals(): IVisualObject[];
    boundingBoxIntersectFilter(
        boundingBox: {
            min: XYZ;
            max: XYZ;
        },
        filter?: IShapeFilter,
    ): IVisualObject[];
    private _getVisualObject;
    displayMesh(datas: ShapeMeshData[], opacity?: number): number;
    displayInstancedMesh(data: MeshLike, matrixs: Matrix4[], opacity?: number): number;
    displayLineSegments(data: EdgeMeshData): number;
    setPosition(id: number, position: Float32Array): void;
    setInstanceMatrix(id: number, matrixs: Matrix4[]): void;
    removeMesh(id: number): void;
    setVisible(node: INode, visible: boolean): void;
    moveNode(node: INode, oldParent: INode): void;
    addNode(nodes: INode[]): void;
    private displayNode;
    removeNode(models: INode[]): void;
    private getParentVisual;
    findShapes(shapeType: ShapeType): Object3D[];
    getMaterial(id: string | string[]): ThreeMaterial | ThreeMaterial[];
}
