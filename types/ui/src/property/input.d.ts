import { type IConverter, type IDocument, type Property } from "@dronecad/core";
import { PropertyBase } from "./propertyBase";
export declare class InputProperty extends PropertyBase {
    readonly document: IDocument;
    readonly property: Property;
    readonly converter: IConverter | undefined;
    constructor(document: IDocument, objects: any[], property: Property);
    private isReadOnly;
    private readonly handleBlur;
    private readonly handleKeyDown;
    private readonly setValue;
    private getConverter;
}
