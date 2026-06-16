import { type IConverter, Result } from "@dronecad/core";
export declare class ColorConverter implements IConverter<number | string> {
    convert(value: number | string): Result<string>;
    convertBack(value: string): Result<number>;
}
