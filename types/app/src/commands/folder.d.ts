import { type IApplication, type ICommand } from "@dronecad/core";
export declare class NewFolder implements ICommand {
    execute(app: IApplication): Promise<void>;
}
