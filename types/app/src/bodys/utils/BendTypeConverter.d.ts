import { type IConverter, Result } from "@dronecad/core";
export declare class BendTypeConverter implements IConverter<number> {
    convert(value: number): Result<string>;
    convertBack(value: string): Result<number>;
}
