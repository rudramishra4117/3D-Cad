export declare const ShapeTypes: {
    readonly shape: 0;
    readonly compound: 1;
    readonly compoundSolid: 2;
    readonly solid: 4;
    readonly shell: 8;
    readonly face: 16;
    readonly wire: 32;
    readonly edge: 64;
    readonly vertex: 128;
};
export type ShapeType = (typeof ShapeTypes)[keyof typeof ShapeTypes];
export declare class ShapeTypeUtils {
    static isWhole(type: ShapeType): type is 0 | 2 | 1 | 4 | 128;
    static stringValue(
        type: ShapeType,
    ):
        | "Shape"
        | "Compound"
        | "CompoundSolid"
        | "Solid"
        | "Shell"
        | "Face"
        | "Wire"
        | "Edge"
        | "Vertex"
        | "Unknown";
    static hasCompound(type: ShapeType): boolean;
    static hasCompoundSolid(type: ShapeType): boolean;
    static hasSolid(type: ShapeType): boolean;
    static hasShell(type: ShapeType): boolean;
    static hasFace(type: ShapeType): boolean;
    static hasWire(type: ShapeType): boolean;
    static hasEdge(type: ShapeType): boolean;
    static hasVertex(type: ShapeType): boolean;
}
