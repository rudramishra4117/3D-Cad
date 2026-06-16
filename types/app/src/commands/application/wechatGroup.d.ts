import { type IApplication, type ICommand } from "@dronecad/core";
export declare class WeChatGroup implements ICommand {
    execute(app: IApplication): Promise<void>;
    private ui;
}
