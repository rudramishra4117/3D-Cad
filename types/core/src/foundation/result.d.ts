import type { IEqualityComparer } from "./equalityComparer";
export interface ResultOptions<T, E = string> {
    isOk: boolean;
    value: T | undefined;
    error: E | undefined;
}
export declare class Result<T, E = string> {
    #private;
    get isOk(): boolean;
    get value(): T;
    get error(): E;
    constructor(options: ResultOptions<T, E>);
    parse<U>(): Result<U, E>;
    isOkAnd(predict: (value: T) => boolean): boolean;
    isErrorOr(predict: (value: T) => boolean): boolean;
    unchecked(): T | undefined;
    static ok<T>(value: T): Result<T, never>;
    static err<E>(error: E): Result<any, E>;
}
export declare class ResultEqualityComparer<T> implements IEqualityComparer<Result<T>> {
    readonly equal?: ((left: T, right: T) => boolean) | undefined;
    constructor(equal?: ((left: T, right: T) => boolean) | undefined);
    equals(left: Result<T>, right: Result<T>): boolean;
}
