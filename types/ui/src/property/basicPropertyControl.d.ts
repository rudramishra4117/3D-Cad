import { type IDocument, type Property } from "@dronecad/core";
import { CheckProperty } from "./check";
import { ColorProperty } from "./colorProperty";
import { InputProperty } from "./input";
import { MaterialProperty } from "./materialProperty";
export declare function basicPropertyControl(
    document: IDocument,
    objs: any[],
    prop: Property,
): "" | CheckProperty | ColorProperty | InputProperty | MaterialProperty;
