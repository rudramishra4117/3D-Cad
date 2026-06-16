import { type AsyncController } from "@dronecad/core";
export declare class OKCancel extends HTMLElement {
    private control?;
    constructor();
    private container;
    private buttons;
    private _createIcon;
    setControl(control: AsyncController | undefined): void;
    private readonly _onConfirm;
    private readonly _onCancel;
}
