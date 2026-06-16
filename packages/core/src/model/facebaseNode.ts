import { property } from "../property";
import { serialize } from "../serialize";
import { ParameterShapeNode } from "./shapeNode";

export abstract class FacebaseNode extends ParameterShapeNode {
    @serialize()
    @property("option.command.isFace")
    get isFace() {
        return this.getPrivateValue("isFace", false);
    }
    set isFace(value: boolean) {
        this.setProperty("isFace", value);
    }
}
