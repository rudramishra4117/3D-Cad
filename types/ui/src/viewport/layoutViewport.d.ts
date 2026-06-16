import { type IApplication } from "@dronecad/core";
export declare class LayoutViewport extends HTMLElement {
    readonly app: IApplication;
    readonly showViewControls: boolean;
    private readonly _viewports;
    constructor(app: IApplication, showViewControls?: boolean);
    private readonly _handleViewCollectionChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly _handleCursor;
    private createViewport;
    private readonly _handleActiveViewChanged;
}
