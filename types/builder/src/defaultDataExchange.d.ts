import { type IDataExchange, type IDocument, Result, type VisualNode } from "@dronecad/core";
export declare class DefaultDataExchange implements IDataExchange {
    importFormats(): string[];
    exportFormats(): string[];
    import(document: IDocument, files: FileList | File[]): Promise<void>;
    private handleSingleFileImport;
    private extensionIs;
    private handleImportResult;
    importBrep(document: IDocument, file: File): Promise<Result<any, string>>;
    private importStl;
    private importIges;
    private importStep;
    export(type: string, nodes: VisualNode[]): Promise<BlobPart[] | undefined>;
    private getExportShapes;
    private exportStl;
    private exportStep;
    private exportIges;
    private exportBrep;
    private handleExportResult;
}
