import { type IApplication, type ICommand } from "@dronecad/core";
export declare class OpenDocument implements ICommand {
    execute(app: IApplication): Promise<void>;
}
