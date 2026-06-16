import { type IHighlighter, type ShapeMeshData, type ShapeType, type VisualState } from "@dronecad/core";
import { Group } from "three";
import type { ThreeVisualContext } from "./threeVisualContext";
import { type ThreeVisualObject } from "./threeVisualObject";
export declare class GeometryState {
    readonly highlighter: ThreeHighlighter;
    readonly visual: ThreeVisualObject;
    private readonly _states;
    constructor(highlighter: ThreeHighlighter, visual: ThreeVisualObject);
    getState(type: ShapeType, index?: number): VisualState | undefined;
    private state_key;
    addState(state: VisualState, type: ShapeType, index: number[]): void;
    removeState(state: VisualState, type: ShapeType, index: number[]): void;
    private updateState;
    private setWholeState;
    private updateStates;
    resetState(): void;
    private setSubGeometryState;
    private addSubEdgeState;
    private getOrCloneGeometry;
}
export declare class ThreeHighlighter implements IHighlighter {
    readonly content: ThreeVisualContext;
    private readonly _stateMap;
    readonly container: Group;
    constructor(content: ThreeVisualContext);
    clear(): void;
    resetState(geometry: ThreeVisualObject): void;
    getState(shape: ThreeVisualObject, type: ShapeType, index?: number): VisualState | undefined;
    addState(geometry: ThreeVisualObject, state: VisualState, type: ShapeType, ...index: number[]): void;
    removeState(geometry: ThreeVisualObject, state: VisualState, type: ShapeType, ...index: number[]): void;
    private getOrInitState;
    highlightMesh(...datas: ShapeMeshData[]): number;
    removeHighlightMesh(id: number): void;
}
