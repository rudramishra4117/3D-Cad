import { type IShapeFactory, type IWire, Result } from "@dronecad/core";
export declare class WireFilletBuilder {
    private factory;
    constructor(factory: IShapeFactory);
    build(path: IWire, radius: number): Result<IWire>;
}
