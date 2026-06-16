import { type ICommand, type IDisposable } from "@dronecad/core";
export declare class CommandContext extends HTMLElement implements IDisposable {
    readonly command: ICommand;
    private readonly propMap;
    constructor(command: ICommand);
    connectedCallback(): void;
    disconnectedCallback(): void;
    dispose(): void;
    private readonly onPropertyChanged;
    private initContext;
    private cacheDependencies;
    private setVisible;
    private findGroup;
    private createItem;
    private newCombobox;
    private newInput;
    private newCheckbox;
    private newButton;
    private materialEditor;
}
