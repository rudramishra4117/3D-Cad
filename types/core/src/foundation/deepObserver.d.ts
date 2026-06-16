import { type IPropertyChanged } from "./observer";
import { Result } from "./result";
export type DeepPropertyChangedHandler = (path: string, source: IPropertyChanged, oldValue: any) => void;
export type SourceHandler = {
    handler: DeepPropertyChangedHandler;
    sources: {
        source: IPropertyChanged;
        prefix: string | undefined;
    }[];
};
export declare class DeepObserver {
    private static readonly handlers;
    static getPathValue(instance: IPropertyChanged, path: string): Result<any>;
    static addDeepPropertyChangedHandler(
        instance: IPropertyChanged,
        handler: DeepPropertyChangedHandler,
    ): void;
    static deepHandlePropertyChanged(
        sourceHandler: SourceHandler,
        source: IPropertyChanged,
        prefix?: string,
    ): void;
    static removeDeepPropertyChangedHandler(
        instance: IPropertyChanged,
        handler: DeepPropertyChangedHandler,
    ): void;
    private static getOrInitHandler;
    private static initSourceHandler;
    private static updateHandlers;
}
