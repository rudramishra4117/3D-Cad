import {
    command,
    type IStep,
    ReferencePlaneNode,
    SelectNodeStep,
    SketchNode,
    Transaction,
} from "@dronecad/core";
import { MultistepCommand } from "../multistepCommand";

@command({
    key: "create.sketch",
    icon: "icon-plane",
})
export class CreateSketchCommand extends MultistepCommand {
    protected getSteps(): IStep[] {
        return [
            new SelectNodeStep("prompt.selectReferencePlane", {
                filter: {
                    allow: (node) => node instanceof ReferencePlaneNode,
                },
                multiple: false,
            }),
        ];
    }

    protected override executeMainTask(): void {
        const selectedNode = this.stepDatas[0].nodes?.[0];
        if (!selectedNode || !(selectedNode instanceof ReferencePlaneNode)) {
            return;
        }

        Transaction.execute(this.document, "create sketch", () => {
            const sketch = new SketchNode({
                document: this.document,
                referencePlaneId: selectedNode.id,
                name: "Sketch",
            });
            this.document.modelManager.addNode(sketch);
        });
    }
}
