import { type IView } from "@dronecad/core";
export declare class Viewport extends HTMLElement {
    readonly view: IView;
    readonly showViewControls: boolean;
    private readonly _flyout;
    private readonly _eventCaches;
    private readonly _acts;
    constructor(view: IView, showViewControls: boolean);
    private readonly onActCollectionChanged;
    private render;
    private createCameraControls;
    private createActionControls;
    private createActs;
    private readonly setActName;
    private createCameraControl;
    private createViewModeControl;
    connectedCallback(): void;
    disconnectedCallback(): void;
    dispose(): void;
    private initEvent;
    private addEventListenerHandler;
    private removeEvents;
    private readonly handleEvent;
    private readonly pointerMove;
    private readonly pointerDown;
    private readonly pointerUp;
    private readonly pointerOut;
    private readonly mouseWheel;
}
