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

export interface ConeNodeOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    radius: number;
    dz: number;
}

@serializable()
export class ConeNode extends ParameterShapeNode {
    override display(): I18nKeys {
        return "body.cone";
    }

    @serialize()
    @property("circle.center")
    get center() {
        return this.getPrivateValue("center");
    }
    set center(center: XYZ) {
        this.setPropertyEmitShapeChanged("center", center);
    }

    @serialize()
    @property("circle.radius")
    get radius() {
        return this.getPrivateValue("radius");
    }
    set radius(dy: number) {
        this.setPropertyEmitShapeChanged("radius", dy);
    }

    @serialize()
    @property("box.dz")
    get dz() {
        return this.getPrivateValue("dz");
    }
    set dz(dz: number) {
        this.setPropertyEmitShapeChanged("dz", dz);
    }

    @serialize()
    get normal(): XYZ {
        return this.getPrivateValue("normal");
    }

    constructor(options: ConeNodeOptions) {
        super(options);
        this.setPrivateValue("normal", options.normal);
        this.setPrivateValue("center", options.center);
        this.setPrivateValue("radius", options.radius);
        this.setPrivateValue("dz", options.dz);
    }

    generateShape(): Result<IShape> {
        return this.document.application.shapeFactory.cone(this.normal, this.center, this.radius, 0, this.dz);
    }
}
