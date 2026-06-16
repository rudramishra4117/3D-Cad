import type { INode, INodeLinkedList } from "../model";
import type { IDisposable } from "./disposable";
export interface IHistoryRecord extends IDisposable {
    readonly name: string;
    undo(): void;
    redo(): void;
}
export declare class History implements IDisposable {
    #private;
    private readonly _undos;
    private readonly _redos;
    disabled: boolean;
    undoLimits: number;
    get isUndoing(): boolean;
    get isRedoing(): boolean;
    dispose(): void;
    private clear;
    add(record: IHistoryRecord): void;
    undoCount(): number;
    redoCount(): number;
    undo(): void;
    redo(): void;
    private tryOperate;
}
export declare class PropertyHistoryRecord implements IHistoryRecord {
    readonly object: any;
    readonly property: string | symbol | number;
    readonly oldValue: any;
    readonly newValue: any;
    readonly name: string;
    constructor(object: any, property: string | symbol | number, oldValue: any, newValue: any);
    dispose(): void;
    undo(): void;
    redo(): void;
}
export type NodeAction = "add" | "remove" | "move" | "transfer" | "insertAfter" | "insertBefore";
export interface NodeRecord {
    node: INode;
    action: NodeAction;
    oldParent?: INodeLinkedList;
    oldPrevious?: INode;
    newParent?: INodeLinkedList;
    newPrevious?: INode;
}
export declare class NodeLinkedListHistoryRecord implements IHistoryRecord {
    readonly records: NodeRecord[];
    readonly name: string;
    constructor(records: NodeRecord[]);
    dispose(): void;
    private handleUndo;
    private handleRedo;
    undo(): void;
    redo(): void;
}
export declare class ArrayRecord implements IHistoryRecord {
    readonly name: string;
    readonly records: Array<IHistoryRecord>;
    constructor(name: string);
    dispose(): void;
    undo(): void;
    redo(): void;
}
