import type { IDocument } from "../document";
import type { IDisposable } from "./disposable";
import type { IEqualityComparer } from "./equalityComparer";
export type PropertyChangedHandler<T, K extends keyof T> = (property: K, source: T, oldValue: T[K]) => void;
export interface IPropertyChanged extends IDisposable {
    onPropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    removePropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    clearPropertyChanged(): void;
}
export declare function isPropertyChanged(obj: object): obj is IPropertyChanged;
export declare class Observable implements IPropertyChanged {
    protected readonly propertyChangedHandlers: Set<PropertyChangedHandler<any, any>>;
    protected _isDisposed: boolean;
    private getPrivateKey;
    protected getPrivateValue<K extends keyof this>(pubKey: K, defaultValue?: this[K]): this[K];
    private initializeDefaultValue;
    setPrivateValue<K extends keyof this>(pubKey: K, newValue: this[K]): void;
    /**
     * Set the value of a private property, and if successful, execute emitPropertyChanged.
     *
     * Note: The private property name must be the public property name with the prefix _, i.e., age->_age(private property name).
     */
    protected setProperty<K extends keyof this>(
        property: K,
        newValue: this[K],
        onPropertyChanged?: (property: K, oldValue: this[K]) => void,
        equals?: IEqualityComparer<this[K]>,
    ): boolean;
    private isEuqals;
    protected emitPropertyChanged<K extends keyof this>(property: K, oldValue: this[K]): void;
    onPropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    removePropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    clearPropertyChanged(): void;
    readonly dispose: () => void;
    protected disposeInternal(): void;
}
export declare abstract class HistoryObservable extends Observable {
    private _document;
    get document(): IDocument;
    constructor(document: IDocument);
    protected setProperty<K extends keyof this>(
        property: K,
        newValue: this[K],
        onPropertyChanged?: (property: K, oldValue: this[K]) => void,
        equals?: IEqualityComparer<this[K]>,
    ): boolean;
    disposeInternal(): void;
}
