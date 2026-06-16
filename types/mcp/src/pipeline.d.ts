import { BoxNode } from "@dronecad/app/src/bodys/box";
import { type IDocument, type IShape, type Serialized, type StlExportOptions } from "@dronecad/core";
import type { HeadlessApplication } from "./headless";
export interface BoxParams {
    dx: number;
    dy: number;
    dz: number;
    /** Min corner of the box; defaults to the origin. */
    location?: {
        x: number;
        y: number;
        z: number;
    };
}
/** Add a parametric box to a document (history-tracked, like the UI command). */
export declare function addBox(document: IDocument, params: BoxParams): BoxNode;
/**
 * Every generated shape in the document, in WORLD space. We apply the node's
 * worldTransform() (like the app's getExportShapes) so any node-level transform is
 * reflected in export — without it a moved/rotated node would export at the origin.
 */
export declare function collectShapes(document: IDocument): IShape[];
/** Headless STL bytes for the whole document. Binary by default. */
export declare function documentToStl(
    application: HeadlessApplication,
    document: IDocument,
    options?: StlExportOptions,
): Uint8Array;
/** The document as a `.cd` serialized object — what the browser app opens. */
export declare function serializeDocument(document: IDocument): Serialized;
export interface DocumentProperties {
    shapeCount: number;
    /** Summed volume of all solids (mm³). */
    totalVolume: number;
    /** Combined axis-aligned bounding box of the whole model (undefined if empty). */
    boundingBox?: {
        min: {
            x: number;
            y: number;
            z: number;
        };
        max: {
            x: number;
            y: number;
            z: number;
        };
        size: {
            x: number;
            y: number;
            z: number;
        };
    };
}
/** Measure the document: overall bounding box + total solid volume (for verification). */
export declare function measureDocument(document: IDocument): DocumentProperties;
