export declare const Dimensions: {
    readonly None: 0;
    readonly D1: 1;
    readonly D2: 2;
    readonly D3: 4;
    readonly D1D2: 3;
    readonly D1D2D3: 7;
};
export type Dimension = (typeof Dimensions)[keyof typeof Dimensions];
export declare class DimensionUtils {
    static contains(d1: Dimension, d2: Dimension): boolean;
    /**
     *
     * @param value 1: D1, 2: D2, 3: D3, other: None
     * @returns
     */
    static from(value: number): Dimension;
}
