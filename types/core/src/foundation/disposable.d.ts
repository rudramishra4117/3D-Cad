export interface IDisposable {
    dispose(): void;
}
export declare function isDisposable(value: unknown): value is IDisposable;
