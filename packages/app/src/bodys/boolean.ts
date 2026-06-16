import {
    type I18nKeys,
    type IDocument,
    type IShape,
    ParameterShapeNode,
    Result,
    serializable,
    serialize,
} from "@dronecad/core";

export interface BooleanOptions {
    document: IDocument;
    booleanShape: IShape;
}

@serializable()
export class BooleanNode extends ParameterShapeNode {
    override display(): I18nKeys {
        return "body.bolean";
    }

    @serialize()
    get booleanShape(): IShape {
        return this.getPrivateValue("booleanShape");
    }

    constructor(options: BooleanOptions) {
        super(options);
        this.setPrivateValue("booleanShape", options.booleanShape);
    }

    override generateShape(): Result<IShape> {
        return Result.ok(this.booleanShape);
    }
}
