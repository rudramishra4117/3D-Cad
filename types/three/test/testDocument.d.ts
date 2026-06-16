import {
    type Act,
    History,
    type IApplication,
    type IDocument,
    type ISelection,
    type IView,
    ModelManager,
    ObservableCollection,
    type PropertyChangedHandler,
    type Serialized,
} from "@dronecad/core";
import { ThreeVisual } from "../src/threeVisual";
export declare class TestDocument implements IDocument {
    application: IApplication;
    name: string;
    id: string;
    history: History;
    selection: ISelection;
    visual: ThreeVisual;
    activeView: IView | undefined;
    modelManager: ModelManager;
    acts: ObservableCollection<Act>;
    userData?: Record<string, unknown> | undefined;
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
