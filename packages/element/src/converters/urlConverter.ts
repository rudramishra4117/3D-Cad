import { type IConverter, Result } from "@dronecad/core";

export class UrlStringConverter implements IConverter<string> {
    convert(value: string): Result<string> {
        return Result.ok(`url('${value}')`);
    }
}
