import type { GeometryType, IGeometry, Matrix4 } from "@dronecad/core";
import type { Geom_Geometry } from "../lib/dronecad-wasm";
export declare abstract class OccGeometry implements IGeometry {
    #private;
    readonly geometry: Geom_Geometry;
    private readonly _geometryType;
    private readonly _handleGeometry;
    get geometryType(): GeometryType;
    constructor(geometry: Geom_Geometry);
    private getGeometryType;
    dispose: () => void;
    protected disposeInternal(): void;
    transform(value: Matrix4): void;
    abstract copy(): IGeometry;
    abstract transformed(matrix: Matrix4): IGeometry;
}
