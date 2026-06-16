import type { Plane } from "./plane";
import { Quaternion } from "./quaternion";
import { XYZ, type XYZLike } from "./xyz";
export interface Matrix4Options {
    array: Float32Array | ArrayLike<number>;
}
/**
 * Matrix in column-major order
 */
export declare class Matrix4 {
    private readonly _array;
    constructor(options: Matrix4Options);
    get array(): ReadonlyArray<number>;
    determinant(): number;
    toArray(): readonly number[];
    add(other: Matrix4): Matrix4;
    invert(): Matrix4 | undefined;
    multiply(other: Matrix4): Matrix4;
    equals(value: Matrix4): boolean;
    clone(): Matrix4;
    static fromArray(array: ArrayLike<number>): Matrix4;
    static identity(): Matrix4;
    static zero(): Matrix4;
    static fromEuler(x: number, y: number, z: number): Matrix4;
    static fromAxisRad(position: XYZLike, normal: XYZLike, radians: number): Matrix4;
    static fromScale(x: number, y: number, z: number): Matrix4;
    static fromTranslation(x: number, y: number, z: number): Matrix4;
    static createMirrorWithPlane(plane: Plane): Matrix4;
    transpose(): Matrix4;
    ofPoints(points: ArrayLike<number>): number[];
    ofPoint(point: XYZLike): XYZ;
    ofVector(vector: XYZLike): XYZ;
    ofVectors(vectors: ArrayLike<number>): number[];
    translationPart(): XYZ;
    getScale(): XYZ;
    getEulerAngles(): {
        pitch: number;
        yaw: number;
        roll: number;
    };
    static createFromTRS(
        position: XYZLike,
        rotation: {
            pitch: number;
            yaw: number;
            roll: number;
        },
        scale: XYZLike,
    ): Matrix4;
    static fromQuaternion(qua: Quaternion): Matrix4;
}
