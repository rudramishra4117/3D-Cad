import type { IApplication } from "../application";
import { type AsyncController, type IDisposable, Observable } from "../foundation";
export interface ICommand {
    execute(application: IApplication): Promise<void>;
}
export interface ICanclableCommand extends ICommand, IDisposable {
    cancel(): Promise<void>;
}
export declare function isCancelableCommand(command: ICommand): command is ICanclableCommand;
export declare abstract class CancelableCommand extends Observable implements ICanclableCommand {
    #private;
    private static readonly _propertiesCache;
    protected readonly disposeStack: Set<IDisposable>;
    private _isCompleted;
    get isCompleted(): boolean;
    private _isCanceled;
    get isCanceled(): boolean;
    private _application;
    get application(): IApplication;
    get document(): import("..").IDocument;
    protected get controller(): AsyncController | undefined;
    protected set controller(value: AsyncController | undefined);
    cancel(): Promise<void>;
    get repeatOperation(): boolean;
    set repeatOperation(value: boolean);
    protected _isRestarting: boolean;
    protected restart(): Promise<void>;
    protected onRestarting(): void;
    execute(application: IApplication): Promise<void>;
    protected checkCanceled(): boolean;
    protected abstract executeAsync(): Promise<void>;
    protected beforeExecute(): void;
    protected afterExecute(): void;
    private readProperties;
    private saveProperties;
    private cacheKeyOfProperty;
}
