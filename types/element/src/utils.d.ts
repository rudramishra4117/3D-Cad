import type { HTMLProps } from "./htmlProps";
export declare function setProperties<
    T extends {
        [K: string]: any;
    },
>(left: T, prop: HTMLProps<T>): void;
export declare function toBase64Img(fileName: string, base64Str: string): string;
