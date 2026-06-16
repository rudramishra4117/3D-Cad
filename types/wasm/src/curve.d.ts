import {
    type Continuity,
    type CurveType,
    type IBezierCurve,
    type IBoundedCurve,
    type IBSplineCurve,
    type ICircle,
    type IConic,
    type ICurve,
    type IDisposable,
    type IEllipse,
    type IGeometry,
    type IHyperbola,
    type ILine,
    type IOffsetCurve,
    type IParabola,
    type ITrimmedCurve,
    Line,
    type Matrix4,
    XYZ,
} from "@dronecad/core";
import type {
    Geom_BezierCurve,
    Geom_BoundedCurve,
    Geom_BSplineCurve,
    Geom_Circle,
    Geom_Conic,
    Geom_Curve,
    Geom_Ellipse,
    Geom_Hyperbola,
    Geom_Line,
    Geom_OffsetCurve,
    Geom_Parabola,
    Geom_TrimmedCurve,
} from "../lib/dronecad-wasm";
import { OccGeometry } from "./geometry";
export declare class OccCurve extends OccGeometry implements ICurve, IDisposable {
    readonly curve: Geom_Curve;
    readonly curveType: CurveType;
    constructor(curve: Geom_Curve);
    static wrap(curve: Geom_Curve): ICurve;
    copy(): IGeometry;
    transformed(matrix: Matrix4): IGeometry;
    nearestExtrema(curve: ICurve | Line):
        | {
              p1: XYZ;
              p2: XYZ;
              distance: number;
              isParallel: boolean;
              u1: number;
              u2: number;
          }
        | undefined;
    uniformAbscissaByLength(length: number): XYZ[];
    uniformAbscissaByCount(curveCount: number): XYZ[];
    length(): number;
    trim(u1: number, u2: number): ITrimmedCurve;
    reverse(): void;
    reversed(): ICurve;
    isClosed(): boolean;
    period(): number;
    isPeriodic(): boolean;
    continutity(): Continuity;
    nearestFromPoint(point: XYZ): {
        point: XYZ;
        distance: number;
        parameter: number;
    };
    value(parameter: number): XYZ;
    firstParameter(): number;
    lastParameter(): number;
    parameter(point: XYZ, tolerance: number): number | undefined;
    project(point: XYZ): XYZ[];
    isCN(n: number): boolean;
    d0(u: number): XYZ;
    d1(u: number): {
        point: XYZ;
        vec: XYZ;
    };
    d2(u: number): {
        point: XYZ;
        vec1: XYZ;
        vec2: XYZ;
    };
    d3(u: number): {
        point: XYZ;
        vec1: XYZ;
        vec2: XYZ;
        vec3: XYZ;
    };
    dn(u: number, n: number): XYZ;
}
export declare class OccLine extends OccCurve implements ILine {
    private line;
    constructor(line: Geom_Line);
    get direction(): XYZ;
    set direction(value: XYZ);
    get location(): XYZ;
    set location(value: XYZ);
}
export declare class OccConic extends OccCurve implements IConic {
    private conioc;
    constructor(conioc: Geom_Conic);
    get axis(): XYZ;
    get xAxis(): XYZ;
    get yAxis(): XYZ;
    eccentricity(): number;
}
export declare class OccCircle extends OccConic implements ICircle {
    private circle;
    constructor(circle: Geom_Circle);
    get center(): XYZ;
    set center(value: XYZ);
    get radius(): number;
    set radius(value: number);
}
export declare class OccEllipse extends OccConic implements IEllipse {
    private ellipse;
    constructor(ellipse: Geom_Ellipse);
    get center(): XYZ;
    set center(value: XYZ);
    get focus1(): XYZ;
    get focus2(): XYZ;
    get majorRadius(): number;
    set majorRadius(value: number);
    get minorRadius(): number;
    set minorRadius(value: number);
}
export declare class OccHyperbola extends OccConic implements IHyperbola {
    private hyperbola;
    constructor(hyperbola: Geom_Hyperbola);
    focal(): number;
    get location(): XYZ;
    set location(value: XYZ);
    get focus1(): XYZ;
    get focus2(): XYZ;
    get majorRadius(): number;
    set majorRadius(value: number);
    get minorRadius(): number;
    set minorRadius(value: number);
}
export declare class OccParabola extends OccConic implements IParabola {
    private parabola;
    constructor(parabola: Geom_Parabola);
    focal(): number;
    get focus(): XYZ;
    get directrix(): XYZ;
}
export declare class OccBoundedCurve extends OccCurve implements IBoundedCurve {
    private boundedCurve;
    constructor(boundedCurve: Geom_BoundedCurve);
    startPoint(): XYZ;
    endPoint(): XYZ;
}
export declare class OccTrimmedCurve extends OccBoundedCurve implements ITrimmedCurve {
    private trimmedCurve;
    constructor(trimmedCurve: Geom_TrimmedCurve);
    setTrim(u1: number, u2: number): void;
    private _basisCurve;
    get basisCurve(): ICurve;
    protected disposeInternal(): void;
}
export declare class OccOffsetCurve extends OccCurve implements IOffsetCurve {
    private offsetCurve;
    constructor(offsetCurve: Geom_OffsetCurve);
    private _basisCurve;
    get basisCurve(): ICurve;
    offset(): number;
    direction(): XYZ;
    protected disposeInternal(): void;
}
export declare class OccBezierCurve extends OccBoundedCurve implements IBezierCurve {
    private bezier;
    constructor(bezier: Geom_BezierCurve);
    weight(index: number): number;
    insertPoleAfter(index: number, point: XYZ, weight: number | undefined): void;
    insertPoleBefore(index: number, point: XYZ, weight: number | undefined): void;
    removePole(index: number): void;
    setPole(index: number, point: XYZ, weight: number | undefined): void;
    setWeight(index: number, weight: number): void;
    nbPoles(): number;
    pole(index: number): XYZ;
    degree(): number;
    poles(): XYZ[];
}
export declare class OccBSplineCurve extends OccBoundedCurve implements IBSplineCurve {
    private bspline;
    constructor(bspline: Geom_BSplineCurve);
    nbKnots(): number;
    knot(index: number): number;
    setKnot(index: number, value: number): void;
    nbPoles(): number;
    pole(index: number): XYZ;
    poles(): XYZ[];
    weight(index: number): number;
    setWeight(index: number, value: number): void;
    degree(): number;
}
