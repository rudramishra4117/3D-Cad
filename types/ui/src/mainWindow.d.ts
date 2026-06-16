import { type IApplication, type IWindow, Ribbon, type RibbonTabProfile } from "@dronecad/core";
export declare class MainWindow extends HTMLElement implements IWindow {
    readonly tabs: RibbonTabProfile[];
    readonly iconFont: string;
    readonly ribbon: Ribbon;
    private _inited;
    private _home?;
    private _editor?;
    constructor(tabs: RibbonTabProfile[], iconFont: string, dom?: HTMLElement);
    protected ensureDom(dom?: HTMLElement): void;
    init(app: IApplication): Promise<void>;
    protected loadCss(): Promise<void>;
    protected fetchIconFont(): Promise<void>;
    private _initEventHandlers;
    private readonly displayHome;
    private _initHome;
    private _initEditor;
    private applyTheme;
    private readonly handleConfigChanged;
}
