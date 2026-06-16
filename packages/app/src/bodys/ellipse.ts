import {
    FacebaseNode,
    type I18nKeys,
    type IDocument,
    type IShape,
    property,
    type Result,
    serializable,
    serialize,
    type XYZ,
} from "@dronecad/core";

export interface EllipseOptions {
    document: IDocument;
    normal: XYZ;
    center: XYZ;
    xvec: XYZ;
    majorRadius: number;
    minorRadius: number;
}

@serializable()
export class EllipseNode extends FacebaseNode {
    override display(): I18nKeys {
        return "body.ellipse";
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
    @property("ellipse.majorRadius")
    get majorRadius() {
        return this.getPrivateValue("majorRadius");
    }
    set majorRadius(radius: number) {
        this.setPropertyEmitShapeChanged("majorRadius", radius);
    }
    @serialize()
    @property("ellipse.minorRadius")
    get minorRadius() {
        return this.getPrivateValue("minorRadius");
    }
    set minorRadius(radius: number) {
        this.setPropertyEmitShapeChanged("minorRadius", radius);
    }

    @serialize()
    get normal(): XYZ {
        return this.getPrivateValue("normal");
    }

    @serialize()
    get xvec(): XYZ {
        return this.getPrivateValue("xvec");
    }

    constructor(options: EllipseOptions) {
        super({ document: options.document });
        this.setPrivateValue("normal", options.normal);
        this.setPrivateValue("center", options.center);
        this.setPrivateValue("xvec", options.xvec);
        this.setPrivateValue("majorRadius", options.majorRadius);
        this.setPrivateValue("minorRadius", options.minorRadius);
    }

    generateShape(): Result<IShape, string> {
        const circle = this.document.application.shapeFactory.ellipse(
            this.normal,
            this.center,
            this.xvec,
            this.majorRadius,
            this.minorRadius,
        );
        if (!circle.isOk || !this.isFace) return circle;
        const wire = this.document.application.shapeFactory.wire([circle.value]);
        return wire.isOk ? wire.value.toFace() : circle;
    }
}
