import type { IDocument } from "../document";
export type PropertyInfo = {
    name: string;
    readonly?: boolean;
};
export declare const InternalClassName = "__cla$$__";
export type SerializedData = {
    [x: string]: any;
};
export type Serialized = {
    [InternalClassName]: string;
} & SerializedData;
export interface RefelectData {
    ctor: new (...args: any[]) => any;
    serialize?: (target: any) => SerializedData;
    deserialize?: (...args: any[]) => any;
}
export declare function registerReflect(
    data: RefelectData,
    name?: string,
    props?: {
        type: any;
        props: PropertyInfo[];
    },
): void;
export declare function registerTypeArray(
    typeArray: new (array: number[]) => Float16Array | Float32Array | Uint32Array,
): void;
export declare function serializable<T>(options?: {
    deserialize?: (...args: any[]) => T;
    serialize?: (target: T) => SerializedData;
}): (target: new (options: any) => T) => void;
export declare function serialize(): (target: any, property: string) => void;
export declare class Serializer {
    static deserializeObject(document: IDocument, data: Serialized): any;
    static deserializeInstance(data: Record<string, any>): any;
    static deserialValue(document: IDocument, value: any): any;
    static deserializeProperties(document: IDocument, instance: any, data: Record<string, any>): void;
    static isWritable(obj: any, prop: string): boolean;
    static serializeObject(target: object): Serialized;
    static serializeProperties(target: object): Record<string, any>;
    private static serializePropertyValue;
    private static getAllKeysOfPrototypeChain;
}
