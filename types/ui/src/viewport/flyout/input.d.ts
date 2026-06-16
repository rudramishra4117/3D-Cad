import { type I18nKeys, type IDisposable, type Result } from "@dronecad/core";
export declare class Input extends HTMLElement implements IDisposable {
    readonly handler: (text: string) => Result<string, I18nKeys>;
    private readonly _cancelledCallbacks;
    private readonly _completedCallbacks;
    private readonly textbox;
    private tip?;
    constructor(text: string, handler: (text: string) => Result<string, I18nKeys>);
    onCancelled(callback: () => void): void;
    onCompleted(callback: () => void): void;
    get text(): string;
    focus(): void;
    dispose(): void;
    private showTip;
    private removeTip;
    private readonly handleKeyDown;
    private processEnterKey;
}
