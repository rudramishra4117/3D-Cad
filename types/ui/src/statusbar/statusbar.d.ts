export declare class Statusbar extends HTMLElement {
    private _isDefaultTip;
    readonly tip: HTMLLabelElement;
    constructor(className: string);
    private readonly handleConfigChanged;
    private render;
    private readonly statusBarTip;
    private readonly setDefaultTip;
}
