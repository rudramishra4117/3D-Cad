export declare const ObjectSnapTypes: {
    readonly none: 0;
    readonly endPoint: 1;
    readonly midPoint: 2;
    readonly center: 4;
    readonly angl: 8;
    readonly intersection: 16;
    readonly perpendicular: 32;
    readonly extension: 64;
    readonly parallel: 128;
    readonly special: 256;
    readonly onCurve: 512;
    readonly onSurface: 1024;
    readonly vertex: 2048;
    readonly grid: 4096;
};
export type ObjectSnapType = (typeof ObjectSnapTypes)[keyof typeof ObjectSnapTypes];
export declare class ObjectSnapTypeUtils {
    static hasType(snapTypes: ObjectSnapType, targetType: ObjectSnapType): boolean;
    static addType(snapTypes: ObjectSnapType, targetType: ObjectSnapType): ObjectSnapType;
    static removeType(snapTypes: ObjectSnapType, targetType: ObjectSnapType): ObjectSnapType;
    static combine(...snapTypes: ObjectSnapType[]): ObjectSnapType;
}
