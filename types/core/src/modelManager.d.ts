import type { IDocument } from "./document";
import { type NodeRecord, Observable, ObservableCollection } from "./foundation";
import type { Material } from "./material";
import type { Component } from "./model/component";
import { FolderNode } from "./model/folderNode";
import { type INode, type INodeLinkedList } from "./model/node";
import { type Serialized } from "./serialize";
export type OnNodeChanged = (records: NodeRecord[]) => void;
export declare class ModelManager extends Observable {
    readonly document: IDocument;
    private readonly _nodeChangedObservers;
    readonly components: ObservableCollection<Component>;
    readonly materials: ObservableCollection<Material>;
    private _rootNode;
    get rootNode(): INodeLinkedList;
    set rootNode(value: INodeLinkedList);
    private _currentNode?;
    get currentNode(): INodeLinkedList | undefined;
    set currentNode(value: INodeLinkedList | undefined);
    constructor(document: IDocument);
    private readonly handleRootNodeNameChanged;
    initRootNode(): FolderNode;
    addNodeObserver(observer: OnNodeChanged): void;
    removeNodeObserver(observer: OnNodeChanged): void;
    notifyNodeChanged(records: NodeRecord[]): void;
    addNode(...nodes: INode[]): void;
    findNode(predicate: (value: INode) => boolean): INode | undefined;
    findNodes(predicate?: (value: INode) => boolean): INode[];
    serialize(): {
        components: any[];
        nodes: Serialized[];
        materials: any[];
    };
    deserialize(data: {
        components: Serialized[];
        nodes: Serialized[];
        materials: Serialized[];
    }): Promise<void>;
    disposeInternal(): void;
    private readonly handleMaterialChanged;
    private readonly handleComponentChanged;
}
