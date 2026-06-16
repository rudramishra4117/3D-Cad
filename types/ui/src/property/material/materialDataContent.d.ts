import { type IDocument, Material, Observable } from "@dronecad/core";
export declare class MaterialDataContent extends Observable {
    readonly document: IDocument;
    readonly callback: (material: Material) => void;
    get editingMaterial(): Material;
    set editingMaterial(value: Material);
    constructor(document: IDocument, callback: (material: Material) => void, editingMaterial: Material);
    deleteMaterial(): void;
    addMaterial(): void;
    copyMaterial(): void;
}
