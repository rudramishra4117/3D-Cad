import type { IViewGizmo } from "@dronecad/core";
export declare class ViewGizmo extends HTMLElement implements IViewGizmo {
    update(): void;
    dispose(): void;
    setDom(dom: HTMLElement): void;
}
