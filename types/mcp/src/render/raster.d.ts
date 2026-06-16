export interface RasterMesh {
    position: ArrayLike<number>;
    index: ArrayLike<number>;
}
export type ViewName = "iso" | "front" | "top" | "right";
export interface RenderOptions {
    width?: number;
    height?: number;
    /** Camera direction. Defaults to "iso" (the classic isometric corner). */
    view?: ViewName;
}
export interface Raster {
    width: number;
    height: number;
    rgba: Uint8Array;
}
/** Render triangle meshes to an RGBA buffer from a fixed isometric viewpoint. */
export declare function renderMeshesToRgba(meshes: RasterMesh[], options?: RenderOptions): Raster;
/**
 * Tile equal-size rasters into a `cols`-wide grid, left-to-right then top-to-bottom,
 * with a 1px divider between cells. Returns one combined raster.
 */
export declare function composeGrid(panels: Raster[], cols: number): Raster;
