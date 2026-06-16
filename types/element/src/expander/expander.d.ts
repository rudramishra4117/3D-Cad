import { type I18nKeys } from "@dronecad/core";
export declare class Expander extends HTMLElement {
    private _isExpanded;
    private readonly expanderIcon;
    private readonly headerPanel;
    readonly contenxtPanel: HTMLDivElement;
    constructor(header: I18nKeys);
    appendChild<T extends Node>(node: T): T;
    append(...nodes: Node[]): void;
    removeChild<T extends Node>(child: T): T;
    addItem(...nodes: Node[]): this;
    private getExpanderIcon;
    private readonly _handleExpanderClick;
}
