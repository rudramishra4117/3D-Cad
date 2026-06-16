import type { IDocument, INode } from "@dronecad/core";
import { TreeItem } from "./treeItem";
export declare class TreeModel extends TreeItem {
    constructor(document: IDocument, node: INode);
    getSelectedHandler(): HTMLElement;
}
