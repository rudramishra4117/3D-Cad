import type { IShape, ISubShape, OriginNode, ShapeMeshRange, ShapeType } from "@dronecad/core";
import { AxesHelper, type LineSegments, type Mesh, type Points } from "three";
import type { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { Constants } from "./constants";
import type { ThreeVisualContext } from "./threeVisualContext";
import { ThreeVisualObject } from "./threeVisualObject";

export class ThreeOriginObject extends ThreeVisualObject {
    constructor(
        readonly context: ThreeVisualContext,
        readonly originNode: OriginNode,
    ) {
        super(originNode);

        // Origin axes
        const axes = new AxesHelper(20);
        // Make it visible across layers or specific layer
        axes.layers.set(Constants.Layers.Default);
        this.add(axes);
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
        return [];
    }
}
