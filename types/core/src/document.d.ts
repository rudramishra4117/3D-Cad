import type { IApplication } from "./application";
import type { History, IDisposable, IPropertyChanged, ObservableCollection } from "./foundation";
import type { ModelManager } from "./modelManager";
import type { ISelection } from "./selection";
import type { Serialized } from "./serialize";
import type { Act, IVisual } from "./visual";
export declare const DOCUMENT_FILE_EXTENSION = ".cd";
export declare const PLUGIN_FILE_EXTENSION = ".dronecadplugin";
export interface IDocument extends IPropertyChanged, IDisposable {
    readonly selection: ISelection;
    readonly id: string;
    readonly history: History;
    readonly visual: IVisual;
    readonly application: IApplication;
    readonly modelManager: ModelManager;
    name: string;
    acts: ObservableCollection<Act>;
    userData?: Record<string, unknown>;
    save(): Promise<void>;
    close(): Promise<void>;
    serialize(): Serialized;
}
