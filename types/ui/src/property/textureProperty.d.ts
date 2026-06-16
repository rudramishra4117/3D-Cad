import { type I18nKeys, type IDocument, type Texture } from "@dronecad/core";
import { Expander } from "@dronecad/element";
export declare class TextureProperty extends Expander {
    readonly document: IDocument;
    readonly texture: Texture;
    constructor(document: IDocument, display: I18nKeys, texture: Texture);
    private render;
    private readonly selectTexture;
}
