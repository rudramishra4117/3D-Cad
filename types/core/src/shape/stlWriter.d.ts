import type { IShape } from "./shape";
/**
 * Minimal triangle-soup input for the STL writer: a flat `position` buffer
 * (x,y,z per vertex) and a triangle `index` buffer. This is exactly the shape of
 * an OCCT `FaceMeshData`, but kept structural so it is trivially unit-testable
 * with plain arrays and decoupled from the geometry kernel.
 */
export interface StlMesh {
    position: ArrayLike<number>;
    index: ArrayLike<number>;
}
export interface StlExportOptions {
    /** Binary STL when true (default), ASCII otherwise. */
    binary?: boolean;
    /** Solid name written into the ASCII header (ignored for binary). */
    name?: string;
}
/**
 * Serialize triangle meshes to STL bytes. Binary by default. Pure data → pure
 * bytes: no geometry kernel, no DOM, no Three.js, so it runs headless and is
 * directly unit-testable.
 */
export declare function meshesToStl(meshes: StlMesh[], options?: StlExportOptions): Uint8Array;
/**
 * Headless STL export for shapes. Reads each shape's lazily-tessellated OCCT face
 * mesh (`shape.mesh.faces`) — which needs no visual layer — and writes STL bytes.
 * This is the UI-independent core export used by both the browser app and the MCP
 * server.
 */
export declare function shapesToStl(shapes: IShape[], options?: StlExportOptions): Uint8Array;
