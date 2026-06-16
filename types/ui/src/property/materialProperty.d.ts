import { type IDocument, type Property } from "@dronecad/core";
import { PropertyBase } from "./propertyBase";
export declare class MaterialProperty extends PropertyBase {
    readonly document: IDocument;
    readonly property: Property;
    private readonly materials;
    constructor(
        document: IDocument,
        objects: {
            materialId: string | string[];
        }[],
        property: Property,
    );
    private materialControl;
    private setMaterial;
    private materialCollection;
}
