import { type IApplication, type ICommand } from "@dronecad/core";
export declare class ToggleDynamicWorkplaneCommand implements ICommand {
    execute(_app: IApplication): Promise<void>;
}
