import { type IApplication, type ICommand, type Ribbon } from "@dronecad/core";
export declare const QuickButton: (command: ICommand) => HTMLSpanElement;
export declare class RibbonUI extends HTMLElement {
    readonly app: IApplication;
    readonly dataContent: Ribbon;
    private readonly _commandContext;
    private commandContext?;
    constructor(app: IApplication, dataContent: Ribbon);
    private readonly handleRibbonChanged;
    private header;
    private leftPanel;
    private createRibbonHeader;
    private centerPanel;
    private createViewItem;
    private rightPanel;
    private ribbonTabs;
    private ribbonTab;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly handleConfigChanged;
    private readonly openContext;
    private readonly closeContext;
}
