import { type IConverter, Observable, ObservableCollection } from "../foundation";
export declare class Combobox<T> extends Observable {
    readonly converter?: IConverter<T> | undefined;
    constructor(converter?: IConverter<T> | undefined);
    get selectedIndex(): number;
    set selectedIndex(value: number);
    get selectedItem(): T | undefined;
    readonly items: ObservableCollection<T>;
}
