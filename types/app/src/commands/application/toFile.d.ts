import { type IApplication, type ICommand } from "@dronecad/core";
export declare class SaveDocumentToFile implements ICommand {
    execute(app: IApplication): Promise<void>;
}
