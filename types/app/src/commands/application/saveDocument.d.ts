import { type IApplication, type ICommand } from "@dronecad/core";
export declare class SaveDocument implements ICommand {
    execute(app: IApplication): Promise<void>;
}
