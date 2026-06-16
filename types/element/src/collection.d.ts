import { ObservableCollection } from "@dronecad/core";
import type { HTMLProps } from "./htmlProps";
export type CollectionProps<T> = HTMLProps<Collection<T>> & {
    sources: ObservableCollection<T> | Array<T>;
    template: (item: T, index: number) => HTMLElement | SVGSVGElement;
};
export declare class Collection<T> extends HTMLElement {
    readonly props: CollectionProps<T>;
    private readonly _itemMap;
    constructor(props: CollectionProps<T>);
    getItem(item: T): HTMLElement | SVGSVGElement | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly _onCollectionChanged;
    private _moveItem;
    private _replaceItem;
    private _mapItems;
    private _removeItem;
}
