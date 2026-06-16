export declare class Flyout extends HTMLElement {
    private _tip;
    private _input;
    private lastFocus;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly showTip;
    private readonly clearTip;
    private readonly displayInput;
    private readonly clearInput;
}
