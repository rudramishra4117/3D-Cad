import { type I18nKeys } from "@dronecad/core";
export declare class Toast {
    private static _lastToast;
    static readonly info: (message: I18nKeys, ...args: any[]) => void;
    static readonly error: (message: string) => void;
    static readonly warn: (message: string) => void;
    private static display;
}
