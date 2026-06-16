import { type IApplication, type ICommand } from "@dronecad/core";
export declare class Redo implements ICommand {
    execute(app: IApplication): Promise<void>;
}
