import { type RibbonCommand, type RibbonGroup } from "@dronecad/core";
export declare function createRibbonButton(item: RibbonCommand): HTMLElement;
export declare class RibbonGroupElement extends HTMLElement {
    #private;
    readonly group: RibbonGroup;
    constructor(group: RibbonGroup);
    dispose(): void;
    private initHTML;
    private openDropdown;
}
