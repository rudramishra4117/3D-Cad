import {
    command,
    EditableShapeNode,
    I18n,
    type IStep,
    SelectShapeStep,
    ShapeTypes,
    VisualStates,
} from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";

@command({
    key: "create.section",
    icon: "icon-section",
})
export class Section extends MultistepCommand {
    protected override executeMainTask() {
        const shape = this.transformdFirstShape(this.stepDatas[0]);
        const path = this.transformdFirstShape(this.stepDatas[1]);
        const section = shape.section(path);
        const node = new EditableShapeNode({
            document: this.document,
            name: I18n.translate("command.create.section"),
            shape: section,
        });
        this.document.modelManager.rootNode.add(node);
        this.document.visual.update();
    }

    protected override getSteps(): IStep[] {
        return [
            new SelectShapeStep(ShapeTypes.shape, "prompt.select.shape", {
                selectedState: VisualStates.faceTransparent,
            }),
            new SelectShapeStep(ShapeTypes.shape, "prompt.select.shape", { keepSelection: true }),
        ];
    }
}
