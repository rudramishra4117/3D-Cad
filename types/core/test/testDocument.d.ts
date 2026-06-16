import {
    type Act,
    History,
    type IApplication,
    type IDocument,
    type ISelection,
    type IView,
    type IVisual,
    type Material,
    ModelManager,
    ObservableCollection,
    type PropertyChangedHandler,
    type Serialized,
} from "@dronecad/core";
export declare class TestDocument implements IDocument {
    application: IApplication;
    name: string;
    id: string;
    history: History;
    selection: ISelection;
    visual: IVisual;
    activeView: IView | undefined;
    userData?: Record<string, unknown> | undefined;
    modelManager: ModelManager;
    materials: ObservableCollection<Material>;
    acts: ObservableCollection<Act>;
    onPropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    removePropertyChanged<K extends keyof this>(handler: PropertyChangedHandler<this, K>): void;
    dispose(): void;
    importFiles(files: File[] | FileList): Promise<void>;
    close(): Promise<void>;
    serialize(): Serialized;
    constructor();
    clearPropertyChanged(): void;
    save(): Promise<void>;
}
