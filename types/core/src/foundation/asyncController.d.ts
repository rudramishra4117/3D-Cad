import type { IDisposable } from "./disposable";
export interface AsyncResult {
    status: "success" | "fail" | "cancel";
    message?: string;
}
export declare class AsyncController implements IDisposable {
    private readonly _failListeners;
    private readonly _successListeners;
    private _result;
    get result(): AsyncResult | undefined;
    readonly fail: (message?: string) => void;
    readonly cancel: (message?: string) => void;
    readonly success: (message?: string) => void;
    private notifyListeners;
    onCancelled(listener: (result: AsyncResult) => void): void;
    onCompleted(listener: (result: AsyncResult) => void): void;
    dispose(): void;
}
