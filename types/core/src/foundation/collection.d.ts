import type { IDisposable } from "./disposable";
import { Observable } from "./observer";
export type CollectionAction = "add" | "remove" | "move" | "replace";
export type CollectionChangedArgs =
    | {
          action: "add";
          items: any[];
      }
    | {
          action: "remove";
          items: any[];
      }
    | {
          action: "move";
          from: number;
          to: number;
      }
    | {
          action: "replace";
          index: number;
          item: any;
          items: any[];
      };
export interface ICollectionChanged {
    onCollectionChanged(callback: (args: CollectionChangedArgs) => void): void;
    removeCollectionChanged(callback: (args: CollectionChangedArgs) => void): void;
}
export declare class ObservableCollection<T> extends Observable implements ICollectionChanged, IDisposable {
    private readonly _callbacks;
    private _items;
    constructor(...items: T[]);
    push(...items: T[]): void;
    remove(...items: T[]): void;
    move(from: number, to: number): void;
    private isValidMove;
    clear(): void;
    get length(): number;
    replace(index: number, ...items: T[]): void;
    private isValidIndex;
    private notifyChange;
    forEach(callback: (item: T, index: number) => void): void;
    map(callback: (item: T, index: number) => any): any[];
    items(): T[];
    [Symbol.iterator](): ArrayIterator<T>;
    item(index: number): T;
    at(index: number): T | undefined;
    filter(predicate: (value: T, index: number, array: T[]) => boolean): T[];
    find(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined;
    indexOf(item: T, fromIndex?: number): number;
    contains(item: T): boolean;
    onCollectionChanged(callback: (args: CollectionChangedArgs) => void): void;
    removeCollectionChanged(callback: (args: CollectionChangedArgs) => void): void;
    disposeInternal(): void;
}
export type SelectMode = "check" | "radio" | "combo";
export declare class SelectableItems<T> {
    readonly mode: SelectMode;
    readonly items: ReadonlyArray<T>;
    selectedItems: Set<T>;
    get selectedIndexes(): number[];
    firstSelectedItem(): T | undefined;
    constructor(items: T[], mode?: SelectMode, selectedItems?: T[]);
}
