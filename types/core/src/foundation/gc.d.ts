import { type IDisposable } from "./disposable";
export interface Deletable {
    delete(): void;
}
export declare function isDeletable(value: unknown): value is Deletable;
export declare const gc: <R>(
    action: (collect: <T extends Deletable | IDisposable>(resource: T) => T) => R,
) => R;
