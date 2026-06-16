import { type IApplication, type ICommand } from "@dronecad/core";
export declare class NewDocument implements ICommand {
    execute(app: IApplication): Promise<void>;
}
