import { type I18nKeys } from "./keys";
export type Locale = {
    display: string;
    language: string;
    translation: {
        [key in I18nKeys]: string;
    } & {
        [key: string]: string;
    };
};
export type I18nPath = "textContent" | "title";
export declare class Localize {
    readonly key: I18nKeys;
    constructor(key: I18nKeys);
    set(e: HTMLElement, path: I18nPath): void;
}
export type Translation = Record<I18nKeys, string>;
export declare class I18n {
    static currentLanguage(): string;
    static defaultLanguage(): string;
    static getLanguages(): Locale[];
    static addLanguage(local: Locale): void;
    static removeLanguage(language: string): void;
    static combineTranslation(language: string, translations: Record<string, string>): void;
    static removeTranslation(language: string, translations: Record<string, string>): void;
    static translate(key: I18nKeys, ...args: any[]): string;
    static translateLanguage(language: Locale, key: I18nKeys, ...args: any[]): string;
    static isI18nKey(key: string): key is I18nKeys;
    static set(dom: HTMLElement, path: I18nPath, key: I18nKeys, ...args: any[]): void;
    static changeLanguage(newLanguage: string): void;
}
