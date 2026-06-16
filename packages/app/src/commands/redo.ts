import { command, type IApplication, type ICommand } from "@dronecad/core";

@command({
    key: "edit.redo",
    icon: "icon-redo",
})
export class Redo implements ICommand {
    async execute(app: IApplication): Promise<void> {
        const document = app.activeView?.document;
        document?.history.redo();
        document?.visual.update();
    }
}
