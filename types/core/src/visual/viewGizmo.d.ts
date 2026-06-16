export interface IViewGizmo {
    update(): void;
    setDom(dom: HTMLElement): void;
    dispose(): void;
}
