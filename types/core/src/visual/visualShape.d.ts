export declare const VisualStates: {
    readonly normal: 0;
    readonly edgeHighlight: 1;
    readonly edgeSelected: 2;
    readonly faceTransparent: 4;
    readonly faceColored: 8;
};
export type VisualState = (typeof VisualStates)[keyof typeof VisualStates];
export declare class VisualStateUtils {
    static addState(origin: VisualState, add: VisualState): VisualState;
    static removeState(origin: VisualState, remove: VisualState): VisualState;
    static hasState(origin: VisualState, testState: VisualState): boolean;
}
export interface VisualGroup {
    start: number;
    count: number;
    materialIndex?: number;
}
