import type { IConverter } from "./foundation";
import type { I18nKeys } from "./i18n";
export type PropertyType = "color" | "materialId";
export interface Property {
    name: string;
    display: I18nKeys;
    converter?: IConverter;
    group?: I18nKeys;
    icon?: string;
    type?: PropertyType;
    dependencies?: {
        property: string | number | symbol;
        value: any;
    }[];
}
export declare function property(
    display: I18nKeys,
    parameters?: Omit<Property, "name" | "display">,
): (target: object, name: string) => void;
export declare class PropertyUtils {
    static getProperties(target: any, until?: object): Property[];
    static getOwnProperties(target: any): Property[];
    private static getAllKeysOfPrototypeChain;
    static getProperty<T extends object>(target: T, property: keyof T): Property | undefined;
}
