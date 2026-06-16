import { XYZ, type XYZLike } from "./xyz";
export declare class Quaternion {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(w?: number, x?: number, y?: number, z?: number);
    static fromAxisAngle(axis: XYZLike, rad: number): Quaternion;
    conjugate(): Quaternion;
    invert(): Quaternion;
    rotateVector(vec3: XYZLike): XYZ;
    toAxes(): number[];
    add(q: Quaternion): Quaternion;
    subtract(q: Quaternion): Quaternion;
    multiply(q: Quaternion): Quaternion;
    toEuler(): {
        x: number;
        y: number;
        z: number;
    };
    static fromEuler(roll: number, pitch: number, yaw: number): Quaternion;
}
