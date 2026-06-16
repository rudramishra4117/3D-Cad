import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    type Result,
    serializable,
    serialize,
} from "@dronecad/core";

export interface FuseOptions {
    document: IDocument;
    bottom: IShape;
    top: IShape;
}

@serializable()
export class FuseNode extends ParameterShapeNode {
    override display(): I18nKeys {
        return "body.fuse";
    }

    @serialize()
    get bottom(): IShape {
        return this.getPrivateValue("bottom");
    }
    set bottom(value: IShape) {
        this.setPropertyEmitShapeChanged("bottom", value);
    }

    @serialize()
    get top(): IShape {
        return this.getPrivateValue("top");
    }
    set top(value: IShape) {
        this.setPropertyEmitShapeChanged("top", value);
    }

    constructor(options: FuseOptions) {
        super(options);
        this.setPrivateValue("bottom", options.bottom);
        this.setPrivateValue("top", options.top);
    }

    override generateShape(): Result<IShape> {
        throw new Error("Method not implemented.");
    }
}
