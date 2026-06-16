import { type IDocument, type INode } from "@dronecad/core";
export declare abstract class TreeItem extends HTMLElement {
    private document;
    readonly name: HTMLLabelElement;
    readonly visibleIcon: SVGSVGElement;
    private _node;
    get node(): INode;
    constructor(document: IDocument, node: INode);
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly onPropertyChanged;
    private setVisibleStyle;
    addSelectedStyle(style: string): void;
    removeSelectedStyle(style: string): void;
    abstract getSelectedHandler(): HTMLElement;
    dispose(): void;
    private getVisibleIcon;
    private readonly onVisibleIconClick;
}
