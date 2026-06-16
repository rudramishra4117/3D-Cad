export declare class ObjectStorage {
    static readonly default: ObjectStorage;
    private readonly prefix;
    constructor(organization: string, application: string);
    setValue(key: string, value: object): void;
    value<T>(key: string, defaultValue?: T): T | undefined;
    remove(key: string): void;
    clear(): void;
}
