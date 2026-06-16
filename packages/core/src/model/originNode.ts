import type { IDocument } from "../document";
import { Id } from "../foundation";
import type { I18nKeys } from "../i18n";
import { BoundingBox, XYZ } from "../math";
import { serializable } from "../serialize";
import { VisualNode } from "./visualNode";

export interface OriginNodeOptions {
    document: IDocument;
    id?: string;
}

@serializable()
export class OriginNode extends VisualNode {
    constructor(options: OriginNodeOptions) {
        super(options.document, "Origin", options.id ?? Id.generate());
    }

    override display(): I18nKeys {
        // We will need to add this to i18n later or just return it for now
        return "body.origin" as any;
    }

    override boundingBox(): BoundingBox | undefined {
        return new BoundingBox(XYZ.zero, XYZ.zero);
    }
}
