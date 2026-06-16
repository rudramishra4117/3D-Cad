import type { IShape, ISubShape, ReferencePlaneNode, ShapeMeshRange, ShapeType } from "@dronecad/core";
import { div, span } from "@dronecad/element";
import { DoubleSide, type LineSegments, Mesh, MeshBasicMaterial, PlaneGeometry, type Points } from "three";
import type { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Constants } from "./constants";
import style from "./threeView.module.css";
import type { ThreeVisualContext } from "./threeVisualContext";
import { ThreeVisualObject } from "./threeVisualObject";

export class ThreeReferencePlaneObject extends ThreeVisualObject {
    private readonly mesh: Mesh;
    private readonly labelObj: CSS2DObject;

    constructor(
        readonly context: ThreeVisualContext,
        readonly referencePlaneNode: ReferencePlaneNode,
    ) {
        super(referencePlaneNode);

        const size = 100;
        const geometry = new PlaneGeometry(size, size);
        const material = new MeshBasicMaterial({
            color: 0x88ccff,
            transparent: true,
            opacity: 0.15,
            side: DoubleSide,
            depthWrite: false, // Ensure it doesn't occlude solid geometry weirdly
        });

        this.mesh = new Mesh(geometry, material);
        // Put on default layer so it's visible, but we might skip it in exports
        this.mesh.layers.set(Constants.Layers.Default);

        // Orient based on type
        const type = referencePlaneNode.planeType;
        if (type === "Top") {
            // XY plane (already default but needs rotation to match z-up if dronecad is z-up)
            // Assuming Top is XY plane
        } else if (type === "Front") {
            // XZ or YZ depending on convention. Assume XZ plane
            this.mesh.rotation.x = Math.PI / 2;
        } else if (type === "Right") {
            // YZ plane
            this.mesh.rotation.y = Math.PI / 2;
        }

        this.add(this.mesh);

        // Label
        const element = div(
            {
                className: `${style.htmlText} ${style.noEvent}`,
                style: { backgroundColor: "transparent", color: "#6688cc", fontWeight: "bold" },
            },
            span({ textContent: type }),
        );
        this.labelObj = new CSS2DObject(element);

        // Position label at the corner
        if (type === "Top") {
            this.labelObj.position.set(size / 2, size / 2, 0);
        } else if (type === "Front") {
            this.labelObj.position.set(size / 2, 0, -size / 2);
        } else if (type === "Right") {
            this.labelObj.position.set(0, size / 2, -size / 2);
        }
        this.add(this.labelObj);
    }

    getSubShapeAndIndex(
        shapeType: "face" | "edge" | "vertex",
        subVisualIndex: number,
    ): {
        shape: IShape | undefined;
        subShape: ISubShape | undefined;
        index: number;
        groups: ShapeMeshRange[];
    } {
        return {
            shape: undefined,
            subShape: undefined,
            index: -1,
            groups: [],
        };
    }

    override subShapeVisual(shapeType: ShapeType): (Mesh | LineSegments2 | Points)[] {
        return [];
    }

    override wholeVisual(): (Mesh | LineSegments2 | Points)[] {
        return [this.mesh]; // Make selectable
    }
}
