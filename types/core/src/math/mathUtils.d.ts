export declare class MathUtils {
    static degToRad(degrees: number): number;
    static radToDeg(radians: number): number;
    static anyEqualZero(...values: number[]): boolean;
    static allEqualZero(...values: number[]): boolean;
    static almostEqual(a: number, b: number, tolerance?: number): boolean;
    static clamp(value: number, min: number, max: number): number;
    static minMax(values: ArrayLike<number>):
        | {
              min: number;
              max: number;
          }
        | undefined;
}
