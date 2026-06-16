import {
    type ButtonSize,
    type CommandData,
    type CommandIcon,
    type CommandKeys,
    type I18nKeys,
} from "@dronecad/core";
export declare class RibbonPushButton extends HTMLElement {
    #private;
    readonly commandName: CommandKeys;
    readonly onClick: () => void;
    get shortcut(): string | undefined;
    constructor(
        commandName: CommandKeys,
        icon: CommandIcon,
        size: ButtonSize,
        onClick: () => void,
        display?: I18nKeys,
    );
    static fromCommandName(commandName: CommandKeys, size: ButtonSize): RibbonPushButton | undefined;
    dispose(): void;
    private initHTML;
    updateShortcut(): void;
}
export declare class RibbonToggleButton extends RibbonPushButton {
    constructor(data: CommandData, size: ButtonSize);
}
