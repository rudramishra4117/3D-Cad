import type { XYZ } from "../../math";
import type { IEqualityComparer } from "../equalityComparer";
export declare class XYZEqualityComparer implements IEqualityComparer<XYZ> {
    readonly tolerance: number;
    constructor(tolerance?: number);
    equals(left: XYZ, right: XYZ): boolean;
}
