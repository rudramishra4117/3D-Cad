import { type CommandIcon, type CommandKeys, type I18nKeys, type PushButton } from "@dronecad/core";
export interface DropdownItemData {
    command: CommandKeys;
    icon: CommandIcon;
    display: I18nKeys;
    onClick: () => void;
}
export declare function getItemData(item: PushButton | CommandKeys): DropdownItemData;
export interface DropdownItemClasses {
    item: string;
    icon: string;
    text: string;
}
export declare function createDropdownItem(
    item: PushButton | CommandKeys,
    onSelect: () => void,
    classes: DropdownItemClasses,
): HTMLElement;
export declare class DropdownController {
    #private;
    static readonly openedDropdowns: Set<DropdownController>;
    static closeAll(): void;
    constructor(containerClass: string);
    get isOpened(): boolean;
    open(anchor: HTMLElement, buildItems: (dropdown: HTMLElement) => void): void;
    close(): void;
    dispose(): void;
}
