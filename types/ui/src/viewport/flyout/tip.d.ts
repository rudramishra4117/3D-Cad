import type { MessageType } from "@dronecad/core";
export declare class Tip extends HTMLElement {
    private color?;
    constructor(msg: string, type: MessageType);
    set(msg: string, type: MessageType): void;
    private setStyle;
    private getStyle;
}
