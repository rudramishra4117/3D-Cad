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

export interface LineOptions {
    document: IDocument;
    start: XYZ;
    end: XYZ;
}

@serializable()
export class LineNode extends ParameterShapeNode {
    override display(): I18nKeys {
        return "body.line";
    }

    @serialize()
    @property("line.start")
    get start() {
        return this.getPrivateValue("start");
    }
    set start(pnt: XYZ) {
        this.setPropertyEmitShapeChanged("start", pnt);
    }

    @serialize()
    @property("line.end")
    get end() {
        return this.getPrivateValue("end");
    }
    set end(pnt: XYZ) {
        this.setPropertyEmitShapeChanged("end", pnt);
    }

    constructor(options: LineOptions) {
        super({ document: options.document });
        this.setPrivateValue("start", options.start);
        this.setPrivateValue("end", options.end);
    }

    generateShape(): Result<IShape, string> {
        return this.document.application.shapeFactory.line(this.start, this.end);
    }
}
