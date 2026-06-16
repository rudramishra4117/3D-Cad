import type { IConverter } from "./converter";
import type { IPropertyChanged } from "./observer";
/**
 * Bind the property chain as a path, separated by dots
 *
 * @example
 * ```ts
 * const binding = new PathBinding(source, "a.b.c");
 * binding.setBinding(element, "property");
 * ```
 */
export declare class PathBinding<T extends IPropertyChanged = IPropertyChanged> {
    readonly source: T;
    readonly path: string;
    converter?: IConverter | undefined;
    private _target?;
    private _oldPathObjects?;
    private _actualSource?;
    constructor(source: T, path: string, converter?: IConverter | undefined);
    setBinding<U extends object>(element: U, property: keyof U): void;
    removeBinding(): void;
    private readonly handleAllPathPropertyChanged;
    private readonly handlePropertyChanged;
    private shouldUpdateHandler;
    private addPropertyChangedHandler;
    private removePropertyChangedHandler;
    private setValue;
    getPropertyValue(): any;
}
export declare class Binding<T extends IPropertyChanged = IPropertyChanged> extends PathBinding<T> {
    constructor(source: T, path: keyof T, converter?: IConverter);
}
