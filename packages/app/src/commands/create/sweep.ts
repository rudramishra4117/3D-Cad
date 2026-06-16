import {
    command,
    type GeometryNode,
    type IStep,
    type IWire,
    property,
    SelectShapeStep,
    type ShapeType,
    ShapeTypes,
} from "@dronecad/core";
import { SweepedNode } from "../../bodys";
import { CreateCommand } from "../createCommand";

@command({
    key: "create.sweep",
    icon: "icon-sweep",
})
export class Sweep extends CreateCommand {
    @property("option.command.isRoundCorner")
    get round() {
        return this.getPrivateValue("round", false);
    }

    set round(value: boolean) {
        this.setProperty("round", value);
    }

    protected override geometryNode(): GeometryNode {
        const path = this.transformdFirstShape(this.stepDatas[0], false) as IWire;
        const shapes = this.transformdShapes(this.stepDatas[1], false) as IWire[];
        return new SweepedNode({
            document: this.document,
            profile: shapes,
            path,
            round: this.round,
        });
    }

    protected override getSteps(): IStep[] {
        return [
            new SelectShapeStep((ShapeTypes.edge | ShapeTypes.wire) as ShapeType, "prompt.select.path"),
            new SelectShapeStep((ShapeTypes.edge | ShapeTypes.wire) as ShapeType, "prompt.select.section", {
                keepSelection: true,
                multiple: true,
            }),
        ];
    }
}
