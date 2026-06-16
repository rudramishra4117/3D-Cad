import { type INode } from "./model";
import type { IShape } from "./shape";
export interface IShapeFilter {
    allow(shape: IShape): boolean;
}
export interface INodeFilter {
    allow(node: INode): boolean;
}
export declare class ShapeNodeFilter implements INodeFilter {
    readonly shapeFilter?: IShapeFilter | undefined;
    constructor(shapeFilter?: IShapeFilter | undefined);
    allow(node: INode): boolean;
}
