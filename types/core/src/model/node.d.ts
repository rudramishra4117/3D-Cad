import type { IDocument } from "../document";
import { HistoryObservable, type IDisposable, type IPropertyChanged } from "../foundation";
import { type Serialized } from "../serialize";
export interface INode extends IPropertyChanged, IDisposable {
    readonly id: string;
    visible: boolean;
    parentVisible: boolean;
    name: string;
    parent: INodeLinkedList | undefined;
    previousSibling: INode | undefined;
    nextSibling: INode | undefined;
    clone(): this;
}
export interface INodeLinkedList extends INode {
    get firstChild(): INode | undefined;
    get lastChild(): INode | undefined;
    add(...items: INode[]): void;
    remove(...items: INode[]): void;
    transfer(...items: INode[]): void;
    size(): number;
    insertAfter(target: INode | undefined, node: INode): void;
    insertBefore(target: INode | undefined, node: INode): void;
    move(child: INode, newParent: this, newPreviousSibling?: INode): void;
}
export declare abstract class Node extends HistoryObservable implements INode {
    parent: INodeLinkedList | undefined;
    previousSibling: INode | undefined;
    nextSibling: INode | undefined;
    readonly id: string;
    constructor(document: IDocument, name: string, id: string);
    get name(): string;
    set name(value: string);
    get visible(): boolean;
    set visible(value: boolean);
    protected abstract onVisibleChanged(): void;
    get parentVisible(): boolean;
    set parentVisible(value: boolean);
    disposeInternal(): void;
    clone(): this;
    protected abstract onParentVisibleChanged(): void;
}
export declare class NodeUtils {
    static isLinkedListNode(node: INode): node is INodeLinkedList;
    static getNodesBetween(node1: INode, node2: INode): INode[];
    static getNodesFromPath(nodes: INode[], path1: INode[], path2: INode[], commonIndex: number): void;
    static path1ToCommonNodes(nodes: INode[], path1: INode[], commonIndex: number): void;
    static commonToPath2Nodes(nodes: INode[], path1: INode[], path2: INode[], commonIndex: number): void;
    static nodeOrChildrenAppendToNodes(nodes: INode[], node: INode): void;
    static findTopLevelNodes(nodes: Set<INode>): INode[];
    static containsDescendant(nodes: Set<INode>, node: INode): boolean;
    private static getNodesFromParentToChild;
    private static currentAtBack;
    private static getCommonParentIndex;
    private static getPathToRoot;
    static findNode(parent: INodeLinkedList, predicate: (value: INode) => boolean): INode | undefined;
    static findNodes(parent: INodeLinkedList, predicate?: (value: INode) => boolean): INode[];
    static serializeNode(node: INode): Serialized[];
    private static serializeNodeToArray;
    static deserializeNode(document: IDocument, nodes: Serialized[]): Promise<INodeLinkedList | undefined>;
}
