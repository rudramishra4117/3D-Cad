import type { SelectableItems } from "@dronecad/core";
export declare class RadioGroup extends HTMLElement {
    readonly header: string;
    readonly context: SelectableItems<any>;
    constructor(header: string, context: SelectableItems<any>);
    render(): HTMLDivElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly _onClick;
}
