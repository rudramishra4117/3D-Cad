export declare const Navigation3DTypes: readonly ["Blender", "Solidworks"];
export type Navigation3DType = (typeof Navigation3DTypes)[number];
export declare class Navigation3D {
    static getKey(event: MouseEvent): string;
    static navigationKeyMap(): {
        pan: string;
        rotate: string;
    };
}
