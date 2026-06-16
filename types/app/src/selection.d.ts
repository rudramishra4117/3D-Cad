import {
    type AsyncController,
    type CursorType,
    type I18nKeys,
    type IDisposable,
    type IDocument,
    type IEventHandler,
    type INode,
    type INodeFilter,
    type ISelection,
    type IShapeFilter,
    type ShapeType,
    VisualNode,
    type VisualState,
} from "@dronecad/core";
export declare class Selection implements ISelection, IDisposable {
    readonly document: IDocument;
    private _selectedNodes;
    private _unselectedNodes;
    shapeType: ShapeType;
    shapeFilter?: IShapeFilter;
    nodeFilter?: INodeFilter;
    constructor(document: IDocument);
    pickShape(
        prompt: I18nKeys,
        controller: AsyncController,
        multiMode: boolean,
        selectedState?: VisualState,
        highlightState?: VisualState,
    ): Promise<import("@dronecad/core").VisualShapeData[]>;
    pickNode(prompt: I18nKeys, controller: AsyncController, multiMode: boolean): Promise<VisualNode[]>;
    pickAsync(
        handler: IEventHandler,
        prompt: I18nKeys,
        controller: AsyncController,
        showControl: boolean,
        cursor?: CursorType,
    ): Promise<void>;
    dispose(): void;
    getSelectedNodes(): INode[];
    setSelection(nodes: INode[], toggle: boolean): number;
    private readonly shapeNodeFilter;
    deselect(nodes: INode[]): void;
    clearSelection(): void;
    private updateSelection;
    private toggleSelectPublish;
    private addSelectPublish;
    private removeSelectedPublish;
}
