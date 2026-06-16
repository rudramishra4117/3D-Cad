import { type IConverter, Result } from "@dronecad/core";

export class StringConverter implements IConverter<string> {
    convert(value: string): Result<string> {
        return Result.ok(value);
    }
    convertBack(value: string): Result<string> {
        return Result.ok(value);
    }
}
