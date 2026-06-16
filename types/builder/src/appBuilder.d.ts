import { Application } from "@dronecad/app";
import {
    type IApplication,
    type IDataExchange,
    type IService,
    type IShapeFactory,
    type IStorage,
    type IVisualFactory,
    type IWindow,
} from "@dronecad/core";
export declare class AppBuilder {
    protected readonly _inits: (() => Promise<void>)[];
    protected _storage?: IStorage;
    protected _visualFactory?: IVisualFactory;
    protected _shapeFactory?: IShapeFactory;
    protected _window?: IWindow;
    constructor();
    protected ensureAPI(): void;
    protected initConfig(): this;
    protected initI18n(): void;
    useIndexedDB(): this;
    useWasmOcc(): this;
    useThree(): this;
    useUI(): this;
    getRibbonTabs(): Promise<import("@dronecad/core").RibbonTabProfile[]>;
    build(): Promise<IApplication>;
    protected loadDefaultPlugins(app: IApplication): Promise<void>;
    createApp(): Application;
    initDataExchange(): IDataExchange;
    private ensureNecessary;
    protected getServices(): IService[];
}
