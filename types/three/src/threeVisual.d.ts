import {
    type IDocument,
    type IEventHandler,
    type IMeshExporter,
    type IVisual,
    type Plane,
} from "@dronecad/core";
import { Scene } from "three";
import { ThreeHighlighter } from "./threeHighlighter";
import { ThreeView } from "./threeView";
import { ThreeVisualContext } from "./threeVisualContext";
export declare class ThreeVisual implements IVisual {
    readonly document: IDocument;
    readonly context: ThreeVisualContext;
    readonly scene: Scene;
    readonly highlighter: ThreeHighlighter;
    readonly meshExporter: IMeshExporter;
    viewHandler: IEventHandler;
    eventHandler: IEventHandler;
    defaultEventHandler: IEventHandler;
    constructor(document: IDocument, defaultEventHandler: IEventHandler);
    initScene(): Scene<import("three").Object3DEventMap>;
    createView(name: string, workplane: Plane): ThreeView;
    update(): void;
    dispose(): void;
}
