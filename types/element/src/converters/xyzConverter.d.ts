import { type IConverter, Result, XY, XYZ } from "@dronecad/core";
export declare class XYConverter implements IConverter<XY> {
    convert(value: XY): Result<string, never>;
    convertBack(value: string): Result<XY>;
}
export declare class XYZConverter implements IConverter<XYZ> {
    convert(value: XYZ): Result<string, never>;
    convertBack(value: string): Result<XYZ>;
}
