import {
    command,
    EditableShapeNode,
    I18n,
    type IStep,
    PubSub,
    property,
    SelectShapeStep,
    ShapeTypes,
    Transaction,
} from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";

@command({
    key: "create.thickSolid",
    icon: "icon-thickSolid",
})
export class ThickSolidCommand extends MultistepCommand {
    @property("option.command.thickness")
    get thickness() {
        return this.getPrivateValue("thickness", 10);
    }
    set thickness(value: number) {
        this.setProperty("thickness", value);
    }

    protected override executeMainTask(): void {
        Transaction.execute(this.document, `excute ${Object.getPrototypeOf(this).data.name}`, () => {
            this.stepDatas[0].shapes.forEach((x) => {
                const subShape = this.application.shapeFactory.makeThickSolidBySimple(
                    x.shape,
                    this.thickness,
                );
                if (!subShape.isOk) {
                    PubSub.default.pub("showToast", "toast.converter.error");
                    return;
                }
                const model = new EditableShapeNode({
                    document: this.document,
                    name: I18n.translate("command.create.thickSolid"),
                    shape: subShape,
                });

                const node = x.owner.node;
                model.transform = node.transform;
                node.parent!.insertAfter(node, model);
            });
            this.document.visual.update();
            PubSub.default.pub("showToast", "toast.success");
        });
    }

    protected override getSteps(): IStep[] {
        return [new SelectShapeStep(ShapeTypes.face, "prompt.select.faces", { multiple: true })];
    }
}
