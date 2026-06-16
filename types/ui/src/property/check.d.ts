import { type IDocument, type Property } from "@dronecad/core";
import { PropertyBase } from "./propertyBase";
export declare class CheckProperty extends PropertyBase {
    readonly document: IDocument;
    readonly property: Property;
    constructor(document: IDocument, objects: any[], property: Property);
}
