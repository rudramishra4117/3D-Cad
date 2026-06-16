import { type IDocument } from "@dronecad/core";
import { ThreeView } from "../src/threeView";
import type { ThreeVisualContext } from "../src/threeVisualContext";
export declare const container: HTMLCanvasElement;
export declare class TestView extends ThreeView {
    constructor(document: IDocument, content: ThreeVisualContext);
    protected initRenderer(): any;
}
