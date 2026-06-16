import { type DialogButton, type I18nKeys } from "@dronecad/core";
export declare function showDialog(
    title: I18nKeys,
    content: HTMLElement,
    buttons?: DialogButton[] | (() => void),
): void;
