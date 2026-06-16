import type { IDocument } from "../document";
import { Id } from "../foundation";
import type { I18nKeys } from "../i18n";
import { BoundingBox, XYZ } from "../math";
import { property } from "../property";
import { serializable, serialize } from "../serialize";
import { VisualNode } from "./visualNode";

export type ReferencePlaneType = "Top" | "Front" | "Right";

export interface ReferencePlaneNodeOptions {
    document: IDocument;
    planeType: ReferencePlaneType;
    id?: string;
}

@serializable()
export class ReferencePlaneNode extends VisualNode {
    @serialize()
    @property("common.planeType" as any)
    get planeType(): ReferencePlaneType {
        return this.getPrivateValue("planeType", "Top");
    }
    set planeType(value: ReferencePlaneType) {
        this.setProperty("planeType", value);
    }

    constructor(options: ReferencePlaneNodeOptions) {
        super(options.document, options.planeType, options.id ?? Id.generate());
        this.setPrivateValue("planeType", options.planeType);
    }

    override display(): I18nKeys {
        return "body.referencePlane" as any;
    }

    override boundingBox(): BoundingBox | undefined {
        // Arbitrary small bounding box for the origin of the plane
        return new BoundingBox(new XYZ({ x: -50, y: -50, z: -50 }), new XYZ({ x: 50, y: 50, z: 50 }));
    }
}
