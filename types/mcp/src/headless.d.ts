import {
    type IApplication,
    type ICommand,
    type IDataExchange,
    type IDocument,
    type IPluginManager,
    type IService,
    type IShapeFactory,
    type IStorage,
    type IView,
    type IVisual,
    type IVisualFactory,
    Observable,
    ObservableCollection,
    type Serialized,
} from "@dronecad/core";
export declare class NullVisualFactory implements IVisualFactory {
    readonly kernelName = "null";
    create(document: IDocument): IVisual;
}
export declare class HeadlessApplication extends Observable implements IApplication {
    readonly dataExchange: IDataExchange;
    readonly visualFactory: IVisualFactory;
    readonly shapeFactory: IShapeFactory;
    readonly services: IService[];
    readonly storage: IStorage;
    readonly views: ObservableCollection<IView>;
    readonly documents: Set<IDocument>;
    readonly pluginManager: IPluginManager;
    executingCommand: ICommand | undefined;
    activeView: IView | undefined;
    newDocument(name: string): Promise<IDocument>;
    openDocument(id: string): Promise<IDocument | undefined>;
    loadDocument(data: Serialized): Promise<IDocument | undefined>;
    loadFileFromUrl(): Promise<void>;
}
/**
 * Initialize the OCCT WebAssembly kernel for Node. Pass the raw bytes of
 * `dronecad-wasm.wasm` (Node has no fetch for it). Call once before modeling.
 */
export declare function initHeadlessWasm(wasmBinary: BufferSource): Promise<void>;
/** Create a headless application wired to the real OCCT geometry core. */
export declare function createHeadlessApplication(): HeadlessApplication;
