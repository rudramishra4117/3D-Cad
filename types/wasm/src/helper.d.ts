import {
    type Continuity,
    type CurveType,
    type JoinType,
    type Line,
    Matrix4,
    type Orientation,
    Plane,
    type ShapeType,
    type SurfaceType,
    XYZ,
} from "@dronecad/core";
import type {
    GeomAbs_Shape,
    gp_Ax1,
    gp_Ax2,
    gp_Ax3,
    gp_Dir,
    gp_Pln,
    gp_Pnt,
    gp_Trsf,
    gp_Vec,
    TopAbs_ShapeEnum,
    TopoDS_Shape,
    Vector3,
} from "../lib/dronecad-wasm";
export declare function toXYZ(p: gp_Pnt | gp_Dir | gp_Vec | Vector3): XYZ;
export declare function toDir(value: Vector3): gp_Dir;
export declare function toPnt(value: Vector3): gp_Pnt;
export declare function toVec(value: Vector3): gp_Vec;
export declare function toAx1(ray: Line): gp_Ax1;
export declare function toAx2(plane: Plane): gp_Ax2;
export declare function toAx3(plane: Plane): gp_Ax3;
export declare function fromAx23(ax: gp_Ax2 | gp_Ax3): Plane;
export declare function fromPln(pln: gp_Pln): Plane;
export declare function toPln(plane: Plane): gp_Pln;
export declare function convertFromMatrix(matrix: Matrix4): gp_Trsf;
export declare function convertToMatrix(matrix: gp_Trsf): Matrix4;
export declare function getOrientation(shape: TopoDS_Shape): Orientation;
export declare function getShapeType(shape: TopoDS_Shape): ShapeType;
export declare function getShapeEnum(shapeType: ShapeType): TopAbs_ShapeEnum;
export declare function getActualShape(shape: TopoDS_Shape): TopoDS_Shape;
export declare function getJoinType(
    joinType: JoinType,
):
    | import("../lib/dronecad-wasm").GeomAbs_JoinTypeValue<0>
    | import("../lib/dronecad-wasm").GeomAbs_JoinTypeValue<2>
    | import("../lib/dronecad-wasm").GeomAbs_JoinTypeValue<1>;
export declare function getCurveType(curve: any): CurveType;
export declare function getSurfaceType(surface: any): SurfaceType;
export declare function convertToContinuity(
    cni: GeomAbs_Shape,
): "c0" | "g1" | "c1" | "g2" | "c2" | "c3" | "cn";
export declare function convertFromContinuity(
    continuity: Continuity,
):
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<0>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<2>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<4>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<5>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<6>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<1>
    | import("../lib/dronecad-wasm").GeomAbs_ShapeValue<3>;
