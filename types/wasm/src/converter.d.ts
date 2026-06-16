import {
    type FolderNode,
    type IDocument,
    type IShape,
    type IShapeConverter,
    Result,
    type StlExportOptions,
} from "@dronecad/core";
export declare class OccShapeConverter implements IShapeConverter {
    private readonly addShapeNode;
    convertToIGES(...shapes: IShape[]): Result<string>;
    convertFromIGES(document: IDocument, iges: Uint8Array): Result<FolderNode>;
    private readonly converterFromData;
    convertToSTEP(...shapes: IShape[]): Result<string>;
    convertFromSTEP(document: IDocument, step: Uint8Array): Result<FolderNode>;
    convertToBrep(shape: IShape): Result<string>;
    convertFromBrep(brep: string): Result<IShape>;
    convertToSTL(shapes: IShape[], options?: StlExportOptions): Result<Uint8Array>;
    convertFromSTL(document: IDocument, stl: Uint8Array): Result<FolderNode>;
}
