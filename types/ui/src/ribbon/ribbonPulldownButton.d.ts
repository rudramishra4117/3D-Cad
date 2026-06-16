import { type ButtonSize, type PulldownButton } from "@dronecad/core";
export declare class RibbonPulldownButton extends HTMLElement {
    #private;
    readonly data: PulldownButton;
    readonly size: ButtonSize;
    constructor(data: PulldownButton, size: ButtonSize);
    dispose(): void;
    private initHTML;
    private readonly toggleDropdown;
    private openDropdown;
}
