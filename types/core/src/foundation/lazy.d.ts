export declare class Lazy<T> {
    #private;
    constructor(factory: () => T);
    get value(): T;
}
