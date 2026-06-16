import { CancelableCommand, Combobox, type IApplication, type ICommand } from "@dronecad/core";
export declare class Import implements ICommand {
    execute(application: IApplication): Promise<void>;
}
export declare class Export extends CancelableCommand {
    get formats(): Combobox<string>;
    set formats(value: Combobox<string>);
    private initCombobox;
    protected executeAsync(): Promise<void>;
    private selectNodesAsync;
}
