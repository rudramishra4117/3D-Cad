import { type IConverter, Result } from "@dronecad/core";
export declare class StringConverter implements IConverter<string> {
    convert(value: string): Result<string>;
    convertBack(value: string): Result<string>;
}
