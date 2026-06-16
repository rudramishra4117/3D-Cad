import { type IApplication, type ICommand, type IDocument, type Material, XYZ } from "@dronecad/core";
export declare abstract class PerformanceTestCommand implements ICommand {
    protected size: number;
    protected gap: number;
    protected rowCols: number;
    execute(app: IApplication): Promise<void>;
    protected abstract createShape(document: IDocument, material: Material, position: XYZ): void;
}
export declare class OccPerformanceTestCommand extends PerformanceTestCommand {
    private index;
    shapes: any[];
    protected createShape(document: IDocument, material: Material, position: XYZ): void;
}
