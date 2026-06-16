import { type INode, ShapeNode } from "./model";
import type { IShape } from "./shape";

export interface IShapeFilter {
    allow(shape: IShape): boolean;
}

export interface INodeFilter {
    allow(node: INode): boolean;
}

export class ShapeNodeFilter implements INodeFilter {
    constructor(readonly shapeFilter?: IShapeFilter) {}

    allow(node: INode): boolean {
        if (node instanceof ShapeNode) {
            if (this.shapeFilter && node.shape.isOk) {
                return this.shapeFilter.allow(node.shape.value);
            }
            return true;
        }

        return false;
    }
}
