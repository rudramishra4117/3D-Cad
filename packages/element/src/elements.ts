import { type CommandIcon, Localize } from "@dronecad/core";
import { Collection, type CollectionProps } from "./collection";
import type { HTMLProps } from "./htmlProps";
import { setProperties } from "./utils";

export const i = createElement("i");

const iconMap: Record<string, string> = {
    "icon-booleanCommon": "ph-intersect",
    "icon-booleanCut": "ph-scissors",
    "icon-booleanFuse": "ph-link",
    "icon-act": "ph-camera",
    "icon-delete": "ph-trash",
    "icon-folder": "ph-folder",
    "icon-folder-plus": "ph-folder-plus",
    "icon-origin": "ph-crosshair",
    "icon-plane": "ph-square",
    "icon-import": "ph-download-simple",
    "icon-export": "ph-upload-simple",
    "icon-redo": "ph-arrow-u-up-right",
    "icon-undo": "ph-arrow-u-up-left",
    "icon-setWorkingPlane": "ph-grid-nine",
    "icon-alignWorkingPlane": "ph-align-center-horizontal",
    "icon-fromSection": "ph-knife",
    "icon-new": "ph-file-plus",
    "icon-open": "ph-folder-open",
    "icon-performance": "ph-gauge",
    "icon-save": "ph-floppy-disk",
    "icon-download": "ph-download",
    "icon-dynamicPlane": "ph-arrows-out-cardinal",
    "icon-qrcode": "ph-qr-code",
    "icon-arc": "ph-circle-half",
    "icon-arc2point": "ph-circle-half-tilt",
    "icon-arc3point": "ph-circle-half-tilt",
    "icon-bezier": "ph-bezier-curve",
    "icon-box": "ph-cube",
    "icon-circle": "ph-circle",
    "icon-cone": "ph-cone",
    "icon-toPoly": "ph-polygon",
    "icon-toFace": "ph-square",
    "icon-toShell": "ph-intersect-three",
    "icon-toSolid": "ph-cube",
    "icon-subShape": "ph-copy",
    "icon-curveProject": "ph-projector-screen",
    "icon-cylinder": "ph-cylinder",
    "icon-ellipse": "ph-oval",
    "icon-prism": "ph-arrow-fat-lines-up",
    "icon-group": "ph-object-group",
    "icon-line": "ph-line-segment",
    "icon-loft": "ph-stack",
    "icon-offset": "ph-arrows-out",
    "icon-pipe": "ph-pipe",
    "icon-point": "ph-dot",
    "icon-pyramid": "ph-pyramid",
    "icon-rect": "ph-rectangle",
    "icon-polygon": "ph-hexagon",
    "icon-revolve": "ph-arrows-clockwise",
    "icon-section": "ph-scissors",
    "icon-sphere": "ph-globe",
    "icon-sweep": "ph-bezier-curve",
    "icon-thickSolid": "ph-cube-transparent",
    "icon-measureAngle": "ph-angle",
    "icon-measureLength": "ph-ruler",
    "icon-measureSelect": "ph-cursor",
    "icon-array": "ph-squares-four",
    "icon-break": "ph-x-circle",
    "icon-addBrush": "ph-paint-brush-broad",
    "icon-removeBrush": "ph-eraser",
    "icon-clearBrush": "ph-paint-bucket",
    "icon-chamfer": "ph-corners-in",
    "icon-explode": "ph-arrows-out",
    "icon-fillet": "ph-corners-out",
    "icon-mirror": "ph-split-vertical",
    "icon-move": "ph-arrows-out-cardinal",
    "icon-removeFeature": "ph-minus-circle",
    "icon-removeSubShape": "ph-minus-square",
    "icon-rotate": "ph-arrow-clockwise",
    "icon-sew": "ph-needle",
    "icon-simplify": "ph-magic-wand",
    "icon-split": "ph-arrows-split",
    "icon-trim": "ph-scissors",
    "icon-times": "ph-x",
    "icon-confirm": "ph-check",
    "icon-cancel": "ph-x",
    "icon-unexpand": "ph-caret-up",
    "icon-expand": "ph-caret-down",
    "icon-eye": "ph-eye",
    "icon-eye-slash": "ph-eye-closed",
    "icon-angle-down": "ph-caret-down",
    "icon-angle-right": "ph-caret-right",
    "icon-plus": "ph-plus",
    "icon-clone": "ph-copy",
    "icon-trash": "ph-trash",
    "icon-command": "ph-terminal-window",
    "icon-home": "ph-house",
    "icon-orthographic": "ph-cube",
    "icon-perspective": "ph-perspective",
    "icon-fitcontent": "ph-corners-out",
    "icon-zoomin": "ph-magnifying-glass-plus",
    "icon-zoomout": "ph-magnifying-glass-minus",
    "icon-cog": "ph-gear",
};

export function createIcon(icon: CommandIcon): Element {
    if (typeof icon === "string") {
        if (icon.startsWith("icon-")) {
            const mappedName = iconMap[icon] || "ph-wrench"; // Fallback to wrench if unknown
            return i({ className: `ph ${mappedName}`, title: icon });
        }
        return svg({ icon });
    }

    switch (icon.type) {
        case "svg":
            return createSvgElement(icon.value);
        case "png": {
            const base64 = uint8ArrayToBase64(icon.value);
            const dataUrl = `data:image/png;base64,${base64}`;
            return img({ src: dataUrl });
        }
        case "url":
            return img({ src: icon.value });
        case "path":
            throw new Error("Plugin icon is not supported, please transform it to other icon type");
        default:
            return i({ className: "ph ph-wrench" });
    }
}

function uint8ArrayToBase64(bytes: Uint8Array): string {
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function createSvgElement(svgString: string): SVGSVGElement {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    return doc.documentElement as unknown as SVGSVGElement;
}

export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K) {
    return (
        props?: HTMLProps<HTMLElementTagNameMap[K]> | string | Node,
        ...children: (Node | string)[]
    ): HTMLElementTagNameMap[K] => {
        const e: HTMLElementTagNameMap[K] = document.createElement(tag);
        if (props) {
            if (typeof props === "string" || props instanceof Node) {
                e.append(props);
            } else {
                setProperties(e, props);
            }
        }
        children.forEach((c) => e.append(c));
        return e;
    };
}

export const div = createElement("div");
export const span = createElement("span");
export const input = createElement("input");
export const button = createElement("button");
export const label = createElement("label");
export const textarea = createElement("textarea");
export const select = createElement("select");
export const option = createElement("option");
export const a = createElement("a");
export const h1 = createElement("h1");
export const h2 = createElement("h2");
export const h3 = createElement("h3");
export const p = createElement("p");
export const ul = createElement("ul");
export const li = createElement("li");
export const img = createElement("img");
export const dialog = createElement("dialog");
export const canvas = createElement("canvas");
export const sup = createElement("sup");
export const form = createElement("form");
export const br = createElement("br");
export const hr = createElement("hr");

export function svg(props: HTMLProps<HTMLElement> & { icon: string }) {
    if (props.icon.startsWith("icon-")) {
        const mappedName = iconMap[props.icon] || "ph-wrench";
        const iElement = document.createElement("i");
        iElement.className = `ph ${mappedName}`;

        const className = String(props.className || "");
        delete props.className;
        const iconProp = props.icon;
        delete (props as any).icon;

        setProperties(iElement, props);
        if (className && className !== "undefined") {
            const classes = className.split(" ").filter((c) => c.trim().length > 0);
            iElement.classList.add(...classes);
        }
        if (props.title) {
            addTitle(Object.assign(props, { icon: iconProp }), iElement as any);
        }
        return iElement as unknown as SVGSVGElement;
    }

    const ns = "http://www.w3.org/2000/svg";
    const child = document.createElementNS(ns, "use");
    child.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${props.icon}`);
    const svg = document.createElementNS(ns, "svg");
    svg.append(child);
    const className = String(props.className);
    delete props.className;
    setProperties(svg, props);
    svg.classList.add(className);
    if (props.title) {
        addTitle(props, svg as any);
    }
    return svg;
}

export function setSVGIcon(svg: SVGSVGElement | HTMLElement, newIcon: string) {
    if (svg.tagName.toLowerCase() === "i") {
        const mappedName = iconMap[newIcon] || "ph-wrench";
        Array.from(svg.classList).forEach((cls) => {
            if (cls.startsWith("ph-") || cls === "ph") {
                svg.classList.remove(cls);
            }
        });
        svg.classList.add("ph", mappedName);
        return;
    }
    const child = svg.firstChild as SVGUseElement;
    child?.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${newIcon}`);
}

function addTitle(props: HTMLProps<HTMLElement> & { icon: string }, svg: SVGSVGElement | HTMLElement) {
    if (svg.tagName.toLowerCase() === "i") {
        const iElem = svg as HTMLElement;
        if (props.title instanceof Localize) {
            props.title.set(iElem as any, "title");
        } else if (typeof props.title === "string") {
            iElem.title = props.title;
        } else {
            props.title?.setBinding(iElem as any, "title");
        }
        return;
    }

    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    if (props.title instanceof Localize) {
        props.title.set(title as any, "textContent");
    } else if (typeof props.title === "string") {
        title.textContent = props.title;
    } else {
        props.title?.setBinding(title, "textContent");
    }

    svg.appendChild(title);
}

export const collection = <T>(options: CollectionProps<T>) => new Collection(options);
