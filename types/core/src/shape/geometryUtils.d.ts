import { Result } from "../foundation";
import { XYZ } from "../math";
import { type ICurve } from "./curve";
import type { IEdge, IFace, IWire } from "./shape";
export declare class GeometryUtils {
    static nearestPoint(
        wire: IWire,
        point: XYZ,
    ): {
        edge: IEdge;
        point: XYZ;
    };
    static curveNormal(curve: ICurve): Readonly<XYZ>;
    private static wireNormal;
    static isCCW(normal: XYZ, wire: IWire): boolean;
    static findNextEdge(wire: IWire, edge: IEdge): Result<IEdge>;
    static normal(shape: IFace | IWire | IEdge): XYZ;
    static intersects(
        edge: IEdge,
        otherEdges: IEdge[],
    ): {
        point: XYZ;
        parameter: number;
    }[];
}
