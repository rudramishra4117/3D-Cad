import { type ButtonSize, type SplitButton } from "@dronecad/core";
export declare class RibbonSplitButton extends HTMLElement {
    #private;
    readonly data: SplitButton;
    readonly size: ButtonSize;
    constructor(data: SplitButton, size: ButtonSize);
    dispose(): void;
    private initHTML;
    private executePrimary;
    private openDropdown;
    private switchPrimary;
}
