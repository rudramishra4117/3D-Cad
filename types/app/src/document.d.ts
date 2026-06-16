import {
    type Act,
    History,
    type IApplication,
    type IDocument,
    type ISelection,
    type IVisual,
    ModelManager,
    Observable,
    ObservableCollection,
    type Serialized,
} from "@dronecad/core";
export declare class Document extends Observable implements IDocument {
    readonly application: IApplication;
    readonly id: string;
    readonly visual: IVisual;
    readonly history: History;
    readonly selection: ISelection;
    readonly acts: ObservableCollection<Act>;
    readonly modelManager: ModelManager;
    userData: Record<string, unknown>;
    static readonly version: string;
    get name(): string;
    set name(name: string);
    constructor(application: IApplication, name: string, id?: string);
    serialize(): Serialized;
    disposeInternal(): void;
    save(): Promise<void>;
    close(): Promise<void>;
    static open(application: IApplication, id: string): Promise<IDocument | undefined>;
    static load(app: IApplication, data: Serialized): Promise<IDocument | undefined>;
}
