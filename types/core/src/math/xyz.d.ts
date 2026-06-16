export type XYZLike = {
    x: number;
    y: number;
    z: number;
};
export interface XYZOptions {
    x: number;
    y: number;
    z: number;
}
/**
 * Gets the component value of a vector at the specified index
 *
 * @param point - An XYZLike object containing x, y, z properties
 * @param index - The index of the component to retrieve (0 for x, 1 for y, 2 for z)
 * @returns The component value at the specified index
 * @throws Error when index is out of valid range (0-2)
 */
export declare function getVectorComponent(point: XYZLike, index: number): number;
export declare class XYZ {
    static readonly zero: Readonly<XYZ>;
    static readonly unitX: Readonly<XYZ>;
    static readonly unitY: Readonly<XYZ>;
    static readonly unitZ: Readonly<XYZ>;
    static readonly unitNX: Readonly<XYZ>;
    static readonly unitNY: Readonly<XYZ>;
    static readonly unitNZ: Readonly<XYZ>;
    static readonly one: Readonly<XYZ>;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(options: XYZOptions);
    toString(): string;
    toArray(): number[];
    static fromArray(arr: number[]): Readonly<XYZ>;
    cross(right: XYZLike): XYZ;
    dot(right: XYZLike): number;
    divided(scalar: number): XYZ | undefined;
    reverse(): XYZ;
    multiply(scalar: number): XYZ;
    sub(right: XYZLike): XYZ;
    add(right: XYZLike): XYZ;
    normalize(): XYZ | undefined;
    distanceTo(right: XYZLike): number;
    static center(p1: XYZLike, p2: XYZLike): XYZ;
    lengthSq(): number;
    length(): number;
    /**
     * Computes the angular value in radians between me and right
     * @param right vector
     * @returns [0, PI]
     */
    angleTo(right: XYZLike): number | undefined;
    /**
     * Computes the angular value in radians between me and right on plane
     * @param right vector
     * @param normal plane normal
     * @returns [0, 2PI]
     */
    angleOnPlaneTo(right: XYZLike, normal: XYZLike): number | undefined;
    /**
     *
     * @param normal rotate axis
     * @param angle angular value in radians
     * @returns
     */
    rotate(normal: XYZ, angle: number): XYZ | undefined;
    isEqualTo(right: XYZLike, tolerance?: number): boolean;
    isPerpendicularTo(right: XYZLike, tolerance?: number): boolean;
    isParallelTo(right: XYZLike, tolerance?: number): boolean;
    isOppositeTo(right: XYZLike, tolerance?: number): boolean;
}
