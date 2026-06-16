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
    type IVisualFactory,
    type IWindow,
    Observable,
    ObservableCollection,
    type Serialized,
} from "@dronecad/core";
export interface ApplicationOptions {
    visualFactory: IVisualFactory;
    shapeFactory: IShapeFactory;
    services: IService[];
    storage: IStorage;
    dataExchange: IDataExchange;
    mainWindow?: IWindow;
}
export declare class Application extends Observable implements IApplication {
    readonly dataExchange: IDataExchange;
    readonly visualFactory: IVisualFactory;
    readonly shapeFactory: IShapeFactory;
    readonly services: IService[];
    readonly storage: IStorage;
    readonly mainWindow?: IWindow;
    readonly pluginManager: IPluginManager;
    readonly views: ObservableCollection<IView>;
    readonly documents: Set<IDocument>;
    get executingCommand(): ICommand | undefined;
    set executingCommand(value: ICommand | undefined);
    get activeView(): IView | undefined;
    set activeView(value: IView | undefined);
    constructor(option: ApplicationOptions);
    private initWindowEvents;
    private readonly handleWindowUnload;
    private readonly handleDragStart;
    private readonly handleDragOver;
    private readonly handleDrop;
    importFiles(files: File[] | FileList | undefined): Promise<void>;
    private loadPluginsWithLoading;
    private loadDocumentsWithLoading;
    private groupFiles;
    private extractDroppedFiles;
    openDocument(id: string): Promise<IDocument | undefined>;
    newDocument(name: string): Promise<IDocument>;
    loadDocument(data: Serialized): Promise<IDocument | undefined>;
    loadFileFromUrl(url: string): Promise<void>;
    protected createActiveView(document: IDocument | undefined): Promise<undefined>;
}
