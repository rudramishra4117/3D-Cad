import { Line, type Plane, type XYZ } from "../../math";
export declare class Axis extends Line {
    readonly name: string;
    constructor(location: XYZ, direction: XYZ, name: string);
    static getAxiesAtPlane(location: XYZ, plane: Plane, containsZ: boolean): Axis[];
}
