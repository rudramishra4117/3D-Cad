import {
    type Continuity,
    type ICompound,
    type ICurve,
    type IEdge,
    type IFace,
    type IShape,
    type IShapeConverter,
    type IShapeFactory,
    type IShell,
    type ISolid,
    type IVertex,
    type IWire,
    type Line,
    type Plane,
    Result,
    type XYZ,
    type XYZLike,
} from "@dronecad/core";
export declare class ShapeFactory implements IShapeFactory {
    readonly kernelName = "opencascade";
    readonly converter: IShapeConverter;
    constructor();
    edge(curve: ICurve): IEdge;
    fillet(shape: IShape, edges: number[], radius: number): Result<IShape>;
    chamfer(shape: IShape, edges: number[], distance: number): Result<IShape>;
    removeFeature(shape: IShape, faces: IFace[]): Result<IShape>;
    removeSubShape(shape: IShape, subShapes: IShape[]): IShape;
    replaceSubShape(shape: IShape, subShape: IShape, newSubShape: IShape): IShape;
    face(wire: IWire[]): Result<IFace>;
    bezier(points: XYZLike[], weights?: number[]): Result<IEdge>;
    point(point: XYZLike): Result<IVertex>;
    line(start: XYZLike, end: XYZLike): Result<IEdge>;
    arc(normal: XYZLike, center: XYZLike, start: XYZLike, angle: number): Result<IEdge>;
    circle(normal: XYZLike, center: XYZLike, radius: number): Result<IEdge>;
    rect(plane: Plane, dx: number, dy: number): Result<IFace>;
    polygon(points: XYZLike[]): Result<IWire>;
    box(plane: Plane, dx: number, dy: number, dz: number): Result<ISolid>;
    cylinder(dir: XYZ, center: XYZ, radius: number, dz: number): Result<ISolid>;
    cone(dir: XYZ, center: XYZ, radius: number, radiusUp: number, dz: number): Result<ISolid>;
    sphere(center: XYZ, radius: number): Result<ISolid>;
    ellipse(
        normal: XYZLike,
        center: XYZLike,
        xvec: XYZLike,
        majorRadius: number,
        minorRadius: number,
    ): Result<IEdge>;
    pyramid(plane: Plane, dx: number, dy: number, dz: number): Result<ISolid>;
    wire(edges: IEdge[]): Result<IWire>;
    shell(faces: IFace[]): Result<IShell>;
    solid(shells: IShell[]): Result<ISolid>;
    prism(shape: IShape, vec: XYZ): Result<IShape>;
    pushPull(shape: IShape, face: IShape, vec: XYZ): Result<IShape>;
    fuse(bottom: IShape, top: IShape): Result<IShape>;
    sweep(profile: IShape[], path: IWire, isRound: boolean): Result<IShape>;
    revolve(profile: IShape, axis: Line, angle: number): Result<IShape>;
    booleanCommon(shape1: IShape[], shape2: IShape[]): Result<IShape>;
    booleanCut(shape1: IShape[], shape2: IShape[]): Result<IShape>;
    booleanFuse(shape1: IShape[], shape2: IShape[], simplifyShape: boolean): Result<IShape>;
    sewing(shape1: IShape, shape2: IShape): Result<IShape>;
    combine(shapes: IShape[]): Result<ICompound>;
    makeThickSolidBySimple(shape: IShape, thickness: number): Result<IShape>;
    makeThickSolidByJoin(shape: IShape, closingFaces: IShape[], thickness: number): Result<IShape>;
    loft(
        sections: (IVertex | IEdge | IWire)[],
        isSolid: boolean,
        isRuled: boolean,
        continuity: Continuity,
    ): Result<IShape>;
    curveProjection(curve: IEdge | IWire, targetFace: IFace, vec: XYZ): Result<IShape>;
    simplifyShape(
        shape: IShape,
        removeEdges: boolean,
        removeFaces: boolean,
        keepShapes: IShape[],
    ): Result<IShape>;
}
