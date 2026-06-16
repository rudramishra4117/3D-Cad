import { Line, Plane, XYZ } from "../math";
import type { IView } from "./view";
export declare class ViewUtils {
    static rayFromEye(view: IView, point: XYZ): Line;
    static directionAt(view: IView, point: XYZ): XYZ;
    static ensurePlane(view: IView, plane: Plane): Plane;
    static raycastClosestPlane(view: IView, start: XYZ, end: XYZ): Plane;
}
