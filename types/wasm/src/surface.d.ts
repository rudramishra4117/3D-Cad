import {
    type Continuity,
    type IBezierSurface,
    type IBoundedSurface,
    type IBSplineSurface,
    type ICompositeSurface,
    type IConicalSurface,
    type ICurve,
    type ICylindricalSurface,
    type IElementarySurface,
    type IGeometry,
    type IOffsetSurface,
    type IPlaneSurface,
    type IPlateSurface,
    type IRectangularTrimmedSurface,
    type ISphericalSurface,
    type ISurface,
    type ISurfaceOfLinearExtrusion,
    type ISurfaceOfRevolution,
    type ISweptSurface,
    type IToroidalSurface,
    type Matrix4,
    type Plane,
    XYZ,
} from "@dronecad/core";
import type {
    Geom_BezierSurface,
    Geom_BSplineSurface,
    Geom_ConicalSurface,
    Geom_CylindricalSurface,
    Geom_ElementarySurface,
    Geom_OffsetSurface,
    Geom_Plane,
    Geom_RectangularTrimmedSurface,
    Geom_SphericalSurface,
    Geom_Surface,
    Geom_SurfaceOfLinearExtrusion,
    Geom_SurfaceOfRevolution,
    Geom_SweptSurface,
    Geom_ToroidalSurface,
    GeomPlate_Surface,
    ShapeExtend_CompositeSurface,
} from "../lib/dronecad-wasm";
import { OccGeometry } from "./geometry";
export declare class OccSurface extends OccGeometry implements ISurface {
    readonly surface: Geom_Surface;
    constructor(surface: Geom_Surface);
    static wrap(surface: Geom_Surface): ISurface;
    copy(): IGeometry;
    transformed(matrix: Matrix4): IGeometry;
    projectCurve(curve: ICurve): ICurve | undefined;
    project(point: XYZ): XYZ[];
    isPlanar(): boolean;
    parameter(
        point: XYZ,
        maxDistance: number,
    ):
        | {
              u: number;
              v: number;
          }
        | undefined;
    nearestPoint(point: XYZ): [XYZ, number] | undefined;
    continuity(): Continuity;
    uIso(u: number): ICurve;
    vIso(v: number): ICurve;
    isUClosed(): boolean;
    isVClosed(): boolean;
    isUPreiodic(): boolean;
    isVPreiodic(): boolean;
    vPeriod(): number;
    uPeriod(): number;
    bounds(): import("../lib/dronecad-wasm").SurfaceBounds;
    isCNu(n: number): boolean;
    isCNv(n: number): boolean;
    d0(u: number, v: number): XYZ;
    d1(
        u: number,
        v: number,
    ): {
        point: XYZ;
        d1u: XYZ;
        d1v: XYZ;
    };
    d2(
        u: number,
        v: number,
    ): {
        point: XYZ;
        d1u: XYZ;
        d1v: XYZ;
        d2u: XYZ;
        d2v: XYZ;
        d2uv: XYZ;
    };
    d3(
        u: number,
        v: number,
    ): {
        point: XYZ;
        d1u: XYZ;
        d1v: XYZ;
        d2u: XYZ;
        d2v: XYZ;
        d2uv: XYZ;
        d3u: XYZ;
        d3v: XYZ;
        d3uuv: XYZ;
        d3uvv: XYZ;
    };
    dn(u: number, v: number, nu: number, nv: number): XYZ;
    value(u: number, v: number): XYZ;
}
export declare class OccPlateSurface extends OccSurface implements IPlateSurface {
    private plateSurface;
    constructor(plateSurface: GeomPlate_Surface);
    setBounds(u1: number, u2: number, v1: number, v2: number): void;
}
export declare class OccBoundedSurface extends OccSurface implements IBoundedSurface {}
export declare class OccElementarySurface extends OccSurface implements IElementarySurface {
    private elementarySurface;
    constructor(elementarySurface: Geom_ElementarySurface);
    get location(): XYZ;
    set location(value: XYZ);
    get axis(): XYZ;
    set axis(value: XYZ);
    get coordinates(): Plane;
    set coordinates(value: Plane);
}
export declare class OccOffsetSurface extends OccSurface implements IOffsetSurface {
    private offsetSurface;
    constructor(offsetSurface: Geom_OffsetSurface);
    get offset(): number;
    set offset(value: number);
    get basisSurface(): ISurface;
    set basisSurface(value: ISurface);
}
export declare class OccSweptSurface extends OccSurface implements ISweptSurface {
    private sweptSurface;
    constructor(sweptSurface: Geom_SweptSurface);
    direction(): XYZ;
    basisCurve(): ICurve;
}
export declare class OccCompositeSurface extends OccSurface implements ICompositeSurface {
    constructor(compositeSurface: ShapeExtend_CompositeSurface);
}
export declare class OccBSplineSurface extends OccSurface implements IBSplineSurface {
    private bsplineSurface;
    constructor(bsplineSurface: Geom_BSplineSurface);
}
export declare class OccBezierSurface extends OccSurface implements IBezierSurface {
    private bezierSurface;
    constructor(bezierSurface: Geom_BezierSurface);
}
export declare class OccRectangularSurface extends OccSurface implements IRectangularTrimmedSurface {
    private rectangularSurface;
    constructor(rectangularSurface: Geom_RectangularTrimmedSurface);
    basisSurface(): ISurface;
    setUTrim(u1: number, u2: number): void;
    setVTrim(v1: number, v2: number): void;
    setTrim(u1: number, u2: number, v1: number, v2: number): void;
}
export declare class OccConicalSurface extends OccElementarySurface implements IConicalSurface {
    private conicalSurface;
    constructor(conicalSurface: Geom_ConicalSurface);
    get semiAngle(): number;
    set semiAngle(value: number);
    setRadius(value: number): void;
    apex(): XYZ;
    refRadius(): number;
}
export declare class OccCylindricalSurface extends OccElementarySurface implements ICylindricalSurface {
    private cylindricalSurface;
    constructor(cylindricalSurface: Geom_CylindricalSurface);
    get radius(): number;
    set radius(value: number);
}
export declare class OccPlane extends OccElementarySurface implements IPlaneSurface {
    private geom_plane;
    constructor(geom_plane: Geom_Plane);
    get plane(): Plane;
    set plane(value: Plane);
}
export declare class OccSphericalSurface extends OccElementarySurface implements ISphericalSurface {
    private sphericalSurface;
    constructor(sphericalSurface: Geom_SphericalSurface);
    get radius(): number;
    set radius(value: number);
    area(): number;
    volume(): number;
}
export declare class OccToroidalSurface extends OccElementarySurface implements IToroidalSurface {
    private toroidalSurface;
    constructor(toroidalSurface: Geom_ToroidalSurface);
    area(): number;
    volume(): number;
    get majorRadius(): number;
    set majorRadius(value: number);
    get minorRadius(): number;
    set minorRadius(value: number);
}
export declare class OccSurfaceOfLinearExtrusion
    extends OccSweptSurface
    implements ISurfaceOfLinearExtrusion
{
    private surfaceOfLinearExtrusion;
    constructor(surfaceOfLinearExtrusion: Geom_SurfaceOfLinearExtrusion);
    setDirection(direction: XYZ): void;
    setBasisCurve(curve: ICurve): void;
}
export declare class OccSurfaceOfRevolution extends OccSweptSurface implements ISurfaceOfRevolution {
    private surfaceOfRevolution;
    constructor(surfaceOfRevolution: Geom_SurfaceOfRevolution);
    get location(): XYZ;
    set location(value: XYZ);
    referencePlane(): Plane;
    setDirection(direction: XYZ): void;
    setBasisCurve(curve: ICurve): void;
}
