import { type IApplication, type Ribbon } from "@dronecad/core";
export declare class Editor extends HTMLElement {
    readonly app: IApplication;
    readonly ribbonContent: Ribbon;
    private readonly _selectionController;
    private readonly _viewportContainer;
    private _sidebarWidth;
    private _isResizingSidebar;
    private _sidebarEl;
    constructor(app: IApplication, ribbonContent: Ribbon);
    private render;
    private _startSidebarResize;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly showSelectionControl;
    private readonly clearSelectionControl;
    private readonly _handleMaterialEdit;
}
