import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    property,
    type Result,
    serializable,
    serialize,
    type XYZ,
} from "@dronecad/core";

export interface PointOptions {
    document: IDocument;
    position: XYZ;
}

@serializable()
export class PointNode extends ParameterShapeNode {
    override display(): I18nKeys {
        return "body.point";
    }

    @serialize()
    @property("point.position")
    get position() {
        return this.getPrivateValue("position");
    }
    set position(pnt: XYZ) {
        this.setPropertyEmitShapeChanged("position", pnt);
    }

    constructor(options: PointOptions) {
        super({ document: options.document });
        this.setPrivateValue("position", options.position);
    }

    generateShape(): Result<IShape, string> {
        return this.document.application.shapeFactory.point(this.position);
    }
}
