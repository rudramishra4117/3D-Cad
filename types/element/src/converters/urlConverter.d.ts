import { type IConverter, Result } from "@dronecad/core";
export declare class UrlStringConverter implements IConverter<string> {
    convert(value: string): Result<string>;
}
