import type { IDocument, IEventHandler, IVisual, IVisualFactory } from "@dronecad/core";
export declare class ThreeVisulFactory implements IVisualFactory {
    readonly createEventHandler: (document: IDocument) => IEventHandler;
    readonly kernelName = "three";
    constructor(createEventHandler: (document: IDocument) => IEventHandler);
    create(document: IDocument): IVisual;
}
