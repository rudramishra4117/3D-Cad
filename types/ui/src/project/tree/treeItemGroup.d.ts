import type { IDocument, INodeLinkedList } from "@dronecad/core";
import { TreeItem } from "./treeItem";
export declare class TreeGroup extends TreeItem {
    private _isExpanded;
    readonly header: HTMLElement;
    readonly items: HTMLDivElement;
    readonly expanderIcon: SVGSVGElement;
    constructor(document: IDocument, node: INodeLinkedList);
    get isExpanded(): boolean;
    set isExpanded(value: boolean);
    getSelectedHandler(): HTMLElement;
    dispose(): void;
    private readonly handleExpanderClick;
    private getExpanderIcon;
    appendChild<T extends Node>(node: T): T;
    append(...nodes: Node[]): void;
    removeChild<T extends Node>(child: T): T;
    addItem(...items: Node[]): this;
    insertAfter(item: TreeItem, child: TreeItem | null): void;
}
