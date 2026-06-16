import { type I18nKeys } from "@dronecad/core";
export declare class Permanent {
    static show(action: () => Promise<void>, message: I18nKeys, ...args: any[]): Promise<void>;
}
