import { type IApplication, type ICommand } from "@dronecad/core";
export declare class Undo implements ICommand {
    execute(application: IApplication): Promise<void>;
}
