import { command, type IApplication, type ICommand } from "@dronecad/core";

let count = 1;

@command({
    key: "doc.new",
    icon: "icon-new",
    isApplicationCommand: true,
})
export class NewDocument implements ICommand {
    async execute(app: IApplication): Promise<void> {
        await app.newDocument(`undefined ${count++}`);
    }
}
