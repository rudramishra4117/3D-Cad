import type { IDocument } from "../document";
import { type INode, type INodeLinkedList, Node } from "./node";
export interface FolderNodeOptions {
    document: IDocument;
    name: string;
    id?: string;
}
export declare class FolderNode extends Node implements INodeLinkedList {
    private _count;
    private _firstChild;
    private _lastChild;
    get firstChild(): INode | undefined;
    get lastChild(): INode | undefined;
    get count(): number;
    size(): number;
    constructor(options: FolderNodeOptions);
    add(...items: INode[]): void;
    private initNode;
    private addToLast;
    children(): INode[];
    remove(...items: INode[]): void;
    transfer(...items: INode[]): void;
    private validateChild;
    private removeNode;
    private removeFirstNode;
    private removeLastNode;
    private removeMiddleNode;
    insertBefore(target: INode | undefined, node: INode): void;
    private insertAsFirst;
    private insertBetweenNodes;
    insertAfter(target: INode | undefined, node: INode): void;
    move(child: INode, newParent: FolderNode, previousSibling?: INode): void;
    disposeInternal(): void;
    private readonly disposeNodes;
    protected onVisibleChanged(): void;
    protected onParentVisibleChanged(): void;
    private setChildrenParentVisible;
}
