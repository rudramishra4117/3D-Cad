import { Binding, type IDocument, type INode, Transaction } from "@dronecad/core";
import { label, setSVGIcon, svg } from "@dronecad/element";
import style from "./treeItem.module.css";

export abstract class TreeItem extends HTMLElement {
    readonly name: HTMLLabelElement;
    readonly visibleIcon: SVGSVGElement;
    readonly typeIcon?: Element;

    private _node: INode;
    get node() {
        return this._node;
    }

    constructor(
        private document: IDocument,
        node: INode,
    ) {
        super();
        this._node = node;
        this.draggable = true;
        this.name = label({
            className: style.name,
            textContent: new Binding(node, "name"),
        });
        this.visibleIcon = svg({
            className: style.icon,
            icon: this.getVisibleIcon(),
            onclick: this.onVisibleIconClick,
        });
        const tIcon = this.getTypeIcon();
        if (tIcon) {
            this.typeIcon = svg({
                className: style.icon,
                icon: tIcon,
            });
        }
        this.setVisibleStyle(node.parentVisible);
    }

    connectedCallback(): void {
        this.node.onPropertyChanged(this.onPropertyChanged);
    }

    disconnectedCallback(): void {
        this.node.removePropertyChanged(this.onPropertyChanged);
    }

    private readonly onPropertyChanged = (property: keyof INode, model: INode) => {
        if (property === "visible") {
            setSVGIcon(this.visibleIcon, this.getVisibleIcon());
        } else if (property === "parentVisible") {
            this.setVisibleStyle(model[property]);
        }
    };

    private setVisibleStyle(parentVisible?: boolean) {
        if (parentVisible === true) {
            this.visibleIcon.classList.remove(style["parent-hidden"]);
        } else {
            this.visibleIcon.classList.add(style["parent-hidden"]);
        }
    }

    addSelectedStyle(style: string) {
        this.getSelectedHandler().classList.add(style);
    }

    removeSelectedStyle(style: string) {
        this.getSelectedHandler().classList.remove(style);
    }

    abstract getSelectedHandler(): HTMLElement;

    dispose() {
        this.remove();
        this.node.removePropertyChanged(this.onPropertyChanged);
        this.visibleIcon.removeEventListener("click", this.onVisibleIconClick);
        this.document = null as any;
        this._node = null as any;
    }

    private getVisibleIcon() {
        return this.node.visible ? "icon-eye" : "icon-eye-slash";
    }

    protected getTypeIcon(): string | undefined {
        const cname = this.node.constructor.name;
        if (cname === "FolderNode") return "icon-folder";
        if (cname === "OriginNode") return "icon-origin";
        if (cname === "ReferencePlaneNode") return "icon-plane";
        if (cname === "ComponentNode" || cname === "MeshNode") return "icon-box";
        return undefined;
    }

    private readonly onVisibleIconClick = (e: MouseEvent) => {
        e.stopPropagation();
        Transaction.execute(this.document, "change visible", () => {
            this.node.visible = !this.node.visible;
        });
        this.document.visual.update();
    };
}
