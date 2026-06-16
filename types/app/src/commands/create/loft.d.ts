import { CancelableCommand, Combobox } from "@dronecad/core";
export declare class LoftCommand extends CancelableCommand {
    private visual;
    private readonly shapes;
    private shape;
    private readonly _continuity;
    get isSolid(): boolean;
    set isSolid(value: boolean);
    get isRuled(): boolean;
    set isRuled(value: boolean);
    get continuity(): Combobox<string>;
    readonly confirm: () => void;
    private initContinuties;
    protected executeAsync(): Promise<void>;
    private selectSection;
    private readonly handleContinuityChange;
    private clearVisual;
    private displayVisual;
    readonly removeVisual: () => void;
}
