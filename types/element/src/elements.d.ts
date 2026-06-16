import { type CommandIcon } from "@dronecad/core";
import { Collection, type CollectionProps } from "./collection";
import type { HTMLProps } from "./htmlProps";
export declare function createIcon(icon: CommandIcon): Element;
export declare function createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
): (
    props?: HTMLProps<HTMLElementTagNameMap[K]> | string | Node,
    ...children: (Node | string)[]
) => HTMLElementTagNameMap[K];
export declare const div: (
    props?: string | Node | HTMLProps<HTMLDivElement> | undefined,
    ...children: (Node | string)[]
) => HTMLDivElement;
export declare const span: (
    props?: string | Node | HTMLProps<HTMLSpanElement> | undefined,
    ...children: (Node | string)[]
) => HTMLSpanElement;
export declare const input: (
    props?: string | Node | HTMLProps<HTMLInputElement> | undefined,
    ...children: (Node | string)[]
) => HTMLInputElement;
export declare const button: (
    props?: string | Node | HTMLProps<HTMLButtonElement> | undefined,
    ...children: (Node | string)[]
) => HTMLButtonElement;
export declare const label: (
    props?: string | Node | HTMLProps<HTMLLabelElement> | undefined,
    ...children: (Node | string)[]
) => HTMLLabelElement;
export declare const textarea: (
    props?: string | Node | HTMLProps<HTMLTextAreaElement> | undefined,
    ...children: (Node | string)[]
) => HTMLTextAreaElement;
export declare const select: (
    props?: string | Node | HTMLProps<HTMLSelectElement> | undefined,
    ...children: (Node | string)[]
) => HTMLSelectElement;
export declare const option: (
    props?: string | Node | HTMLProps<HTMLOptionElement> | undefined,
    ...children: (Node | string)[]
) => HTMLOptionElement;
export declare const a: (
    props?: string | Node | HTMLProps<HTMLAnchorElement> | undefined,
    ...children: (Node | string)[]
) => HTMLAnchorElement;
export declare const h1: (
    props?: string | Node | HTMLProps<HTMLHeadingElement> | undefined,
    ...children: (Node | string)[]
) => HTMLHeadingElement;
export declare const h2: (
    props?: string | Node | HTMLProps<HTMLHeadingElement> | undefined,
    ...children: (Node | string)[]
) => HTMLHeadingElement;
export declare const h3: (
    props?: string | Node | HTMLProps<HTMLHeadingElement> | undefined,
    ...children: (Node | string)[]
) => HTMLHeadingElement;
export declare const p: (
    props?: string | Node | HTMLProps<HTMLParagraphElement> | undefined,
    ...children: (Node | string)[]
) => HTMLParagraphElement;
export declare const ul: (
    props?: string | Node | HTMLProps<HTMLUListElement> | undefined,
    ...children: (Node | string)[]
) => HTMLUListElement;
export declare const li: (
    props?: string | Node | HTMLProps<HTMLLIElement> | undefined,
    ...children: (Node | string)[]
) => HTMLLIElement;
export declare const img: (
    props?: string | Node | HTMLProps<HTMLImageElement> | undefined,
    ...children: (Node | string)[]
) => HTMLImageElement;
export declare const dialog: (
    props?: string | Node | HTMLProps<HTMLDialogElement> | undefined,
    ...children: (Node | string)[]
) => HTMLDialogElement;
export declare const canvas: (
    props?: string | Node | HTMLProps<HTMLCanvasElement> | undefined,
    ...children: (Node | string)[]
) => HTMLCanvasElement;
export declare const sup: (
    props?: string | Node | HTMLProps<HTMLElement> | undefined,
    ...children: (Node | string)[]
) => HTMLElement;
export declare const form: (
    props?: string | Node | HTMLProps<HTMLFormElement> | undefined,
    ...children: (Node | string)[]
) => HTMLFormElement;
export declare const br: (
    props?: string | Node | HTMLProps<HTMLBRElement> | undefined,
    ...children: (Node | string)[]
) => HTMLBRElement;
export declare const hr: (
    props?: string | Node | HTMLProps<HTMLHRElement> | undefined,
    ...children: (Node | string)[]
) => HTMLHRElement;
export declare function svg(
    props: HTMLProps<HTMLElement> & {
        icon: string;
    },
): SVGSVGElement;
export declare function setSVGIcon(svg: SVGSVGElement, newIcon: string): void;
export declare const collection: <T>(options: CollectionProps<T>) => Collection<T>;
