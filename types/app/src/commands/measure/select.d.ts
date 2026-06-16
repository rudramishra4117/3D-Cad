import { CancelableCommand, Combobox, type I18nKeys } from "@dronecad/core";
export declare class SelectMeasure extends CancelableCommand {
    #private;
    get category(): Combobox<I18nKeys>;
    set category(value: Combobox<I18nKeys>);
    private initCombobox;
    private readonly onTypeChange;
    private initSumUI;
    private addSumItem;
    protected afterExecute(): void;
    protected executeAsync(): Promise<void>;
    private readonly createMeasure;
    private edgeMeasure;
    private faceMeasure;
    private wireCenter;
    private solidMeasure;
}
