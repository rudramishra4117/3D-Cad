import type { IViewGizmo } from "@dronecad/core";

export class ViewGizmo extends HTMLElement implements IViewGizmo {
    update(): void {}
    dispose(): void {}
    setDom(dom: HTMLElement) {}
}

customElements.define("view-gizmo", ViewGizmo);
