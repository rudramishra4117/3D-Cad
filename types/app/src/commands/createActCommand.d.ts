import { type IApplication, type ICommand } from "@dronecad/core";
export declare class ActAlignCameraCommand implements ICommand {
    execute(application: IApplication): Promise<void>;
}
