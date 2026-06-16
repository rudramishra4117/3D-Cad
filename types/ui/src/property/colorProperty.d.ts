import { type IDocument, type Property } from "@dronecad/core";
import { ColorConverter } from "@dronecad/element";
import { PropertyBase } from "./propertyBase";
export declare class ColorProperty extends PropertyBase {
    readonly document: IDocument;
    readonly property: Property;
    readonly converter: ColorConverter;
    readonly input: HTMLInputElement;
    constructor(document: IDocument, objects: any[], property: Property);
    private createInput;
    private createPanel;
    disconnectedCallback(): void;
    private readonly setColor;
}
