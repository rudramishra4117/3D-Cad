import { type IApplication, type IService } from "@dronecad/core";
export declare class CommandService implements IService {
    private _lastCommand;
    private _checking;
    private _app;
    private get app();
    start(): void;
    stop(): void;
    register(app: IApplication): void;
    private readonly onActiveViewChanged;
    private readonly executeCommand;
    private executeAsync;
    private canExecute;
    private checking;
}
