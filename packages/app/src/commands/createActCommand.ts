import { Act, command, I18n, type IApplication, type ICommand } from "@dronecad/core";

let index = 0;

@command({
    key: "act.alignCamera",
    icon: "icon-act",
})
export class ActAlignCameraCommand implements ICommand {
    async execute(application: IApplication): Promise<void> {
        const view = application.activeView;
        if (!view) return;

        view.document.acts.push(
            new Act({
                name: `${I18n.translate("ribbon.group.act")} ${index++}`,
                cameraPosition: view.cameraController.cameraPosition,
                cameraTarget: view.cameraController.cameraTarget,
                cameraUp: view.cameraController.cameraUp,
            }),
        );
    }
}
