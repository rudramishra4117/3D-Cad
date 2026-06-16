import type { CommandKeys, ICommand } from "../command";
import type { IDocument } from "../document";
import type { I18nKeys } from "../i18n";
import type { Material } from "../material";
import type { INode } from "../model";
import type { DialogButton, FloatPanelOptions } from "../ui";
import type { CursorType, IView } from "../visual";
import type { AsyncController } from "./asyncController";
import type { IDisposable } from "./disposable";
import type { MessageType } from "./messageType";
import type { Result } from "./result";
export interface PubSubEventMap {
    activeViewChanged: (view: IView | undefined) => void;
    clearFloatTip: () => void;
    clearInput: () => void;
    clearSelectionControl: () => void;
    clearStatusBarTip: () => void;
    closeCommandContext: () => void;
    displayError: (message: string) => void;
    displayHome: (show: boolean) => void;
    documentClosed: (document: IDocument) => void;
    editMaterial: (document: IDocument, material: Material, callback: (material: Material) => void) => void;
    executeCommand: (commandName: CommandKeys) => void;
    modelUpdate: (model: INode) => void;
    openCommandContext: (command: ICommand) => void;
    parentVisibleChanged: (model: INode) => void;
    selectionChanged: (document: IDocument, selected: INode[], unselected: INode[]) => void;
    showDialog: (title: I18nKeys, content: HTMLElement, buttons?: DialogButton[] | (() => void)) => void;
    showFloatPanel: (options: FloatPanelOptions) => void;
    showFloatTip: (
        dom:
            | HTMLElement
            | {
                  level: MessageType;
                  msg: string;
              },
    ) => void;
    showInput: (text: string, handler: (text: string) => Result<string, I18nKeys>) => void;
    showPermanent: (action: () => Promise<void>, message: I18nKeys, ...args: any[]) => void;
    showProperties(document: IDocument, nodes: INode[]): void;
    showSelectionControl: (controller: AsyncController) => void;
    showToast: (message: I18nKeys, ...args: any[]) => void;
    statusBarTip: (tip: I18nKeys) => void;
    viewClosed: (view: IView) => void;
    viewCursor: (cursor: CursorType) => void;
    visibleChanged: (model: INode) => void;
}
export declare class PubSub implements IDisposable {
    static readonly default: PubSub;
    private readonly events;
    private isDisposed;
    dispose(): void;
    sub<K extends keyof PubSubEventMap>(event: K, callback: PubSubEventMap[K]): void;
    pub<K extends keyof PubSubEventMap>(event: K, ...args: Parameters<PubSubEventMap[K]>): void;
    remove<K extends keyof PubSubEventMap>(event: K, callback: PubSubEventMap[K]): void;
    removeAll<K extends keyof PubSubEventMap>(event: K): void;
}
