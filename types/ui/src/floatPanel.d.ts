import { type FloatPanelOptions } from "@dronecad/core";
export declare class FloatPanel extends HTMLElement {
    private header;
    private resizeHandle;
    private isDragging;
    private isResizing;
    private dragStartX;
    private dragStartY;
    private initialLeft;
    private initialTop;
    private initialWidth;
    private initialHeight;
    constructor(options: FloatPanelOptions);
    private createHeader;
    private onHeaderMouseDown;
    private onDrag;
    private onDragEnd;
    private onResizeHandleMouseDown;
    private onResize;
    private onResizeEnd;
    dispose(): void;
}
export declare function showFloatPanel(options: FloatPanelOptions): FloatPanel;
