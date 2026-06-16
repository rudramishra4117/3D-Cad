import type { ICommand } from "./command";
import type { CommandData } from "./commandData";
export type CommandConstructor = new (...args: any[]) => ICommand;
export declare class CommandStore {
    static registerCommand<T extends CommandConstructor>(
        ctor: T,
        metadata: Omit<CommandData, "key"> & {
            key: string;
        },
    ): void;
    static unregisterCommand(command: string | CommandConstructor): void;
    static getComandData(target: string | ICommand | CommandConstructor): CommandData | undefined;
    static getCommand(name: string): CommandConstructor | undefined;
    static getAllCommands(): CommandData[];
}
