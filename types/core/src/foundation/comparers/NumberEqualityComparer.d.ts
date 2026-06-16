import type { IEqualityComparer } from "../equalityComparer";
export declare class NumberEqualityComparer implements IEqualityComparer<number> {
    readonly tolerance: number;
    constructor(tolerance?: number);
    equals(left: number, right: number): boolean;
}
