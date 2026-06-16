import type { EdgeMeshData } from "../shape";
import type { LineSegment } from "./lineSegment";
import type { Matrix4 } from "./matrix4";
import { XYZ, type XYZLike } from "./xyz";
export type Ax3 = {
    location: XYZLike;
    direction: XYZLike;
    xDirection: XYZLike;
};
export type OrientedBoundingBox = {
    center: Ax3;
    size: XYZLike;
};
export declare class BoundingBox {
    readonly min: XYZLike;
    readonly max: XYZLike;
    constructor(min: XYZLike, max: XYZLike);
    static readonly zero: BoundingBox;
    static transformed(box: BoundingBox, matrix: Matrix4): BoundingBox;
    static center(box: BoundingBox | undefined): Readonly<XYZ>;
    static expand(box: BoundingBox, value: number): BoundingBox;
    static wireframe(box: BoundingBox): EdgeMeshData;
    static isValid(box: BoundingBox): boolean;
    static isIntersect(box1: BoundingBox, box2: BoundingBox, tolerance?: number): boolean;
    static isIntersectLineSegment(box: BoundingBox, line: LineSegment): boolean;
    static isInside(box: BoundingBox, point: XYZLike, tolerance?: number): boolean;
    static expandByPoint(box: BoundingBox, point: XYZLike): void;
    static combine(box1: BoundingBox | undefined, box2: BoundingBox | undefined): BoundingBox | undefined;
    static fromNumbers(points: ArrayLike<number>): BoundingBox;
    static fromPoints(points: XYZLike[]): BoundingBox;
    static maxSize(box: BoundingBox): number;
    static minSize(box: BoundingBox): number;
}
