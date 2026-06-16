import type { MaterialDataContent } from "./materialDataContent";
export declare class MaterialEditor extends HTMLElement {
    readonly dataContent: MaterialDataContent;
    private readonly editingControl;
    private readonly colorConverter;
    constructor(dataContent: MaterialDataContent);
    private createEditorUI;
    private titleSection;
    private iconButton;
    private materialsCollection;
    private material;
    private buttons;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly _handleShowProperty;
    private readonly _onEditingMaterialChanged;
    private initEditingControl;
}
