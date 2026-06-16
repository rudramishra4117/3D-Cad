import { type IDocument, type Property } from "@dronecad/core";
import { TextureProperty } from "./textureProperty";
export declare function propertyControl(
    document: IDocument,
    objs: any[],
    prop: Property,
):
    | ""
    | import("./check").CheckProperty
    | import("./colorProperty").ColorProperty
    | import("./input").InputProperty
    | import("./materialProperty").MaterialProperty
    | TextureProperty;
