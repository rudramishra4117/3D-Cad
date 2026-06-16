export type XYLike = {
    x: number;
    y: number;
};
export interface XYOptions {
    x: number;
    y: number;
}
export declare class XY {
    static readonly zero: XY;
    static readonly unitX: XY;
    static readonly unitY: XY;
    readonly x: number;
    readonly y: number;
    constructor(options: XYOptions);
    cross(right: XY): number;
    dot(right: XY): number;
    divided(scalar: number): XY | undefined;
    reverse(): XY;
    multiply(scalar: number): XY;
    sub(right: XY): XY;
    add(right: XY): XY;
    normalize(): XY | undefined;
    distanceTo(right: XY): number;
    static center(p1: XY, p2: XY): XY;
    lengthSq(): number;
    length(): number;
    /**
     * Computes the angular value in radians between me and right
     * @param right vector
     * @returns [0, PI]
     */
    angleTo(right: XY): number | undefined;
    isEqualTo(right: XY, tolerance?: number): boolean;
    isParallelTo(right: XY, tolerance?: number): boolean | undefined;
    isOppositeTo(right: XY, tolerance?: number): boolean | undefined;
}
