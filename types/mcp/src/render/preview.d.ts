import type { IDocument } from "@dronecad/core";
import { type RasterMesh, type RenderOptions } from "./raster";
/** OCCT face meshes of every shape in the document (lazily tessellated). */
export declare function documentMeshes(document: IDocument): RasterMesh[];
/** Render an isometric PNG preview of the document. Returns the PNG bytes. */
export declare function renderPreview(document: IDocument, options?: RenderOptions): Buffer;
/**
 * Render a 2x2 orthographic "three-view" sheet (front / right / top / iso) as one
 * PNG, for a human to sanity-check the geometry before it is pushed to the live view.
 * `size` is the per-panel pixel size (default 320).
 */
export declare function renderViews(
    document: IDocument,
    options?: {
        size?: number;
    },
): Buffer;
