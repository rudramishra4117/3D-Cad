import { Matrix4 } from "../math";
import { FolderNode, type FolderNodeOptions } from "./folderNode";
export interface GroupNodeOptions extends FolderNodeOptions {}
export declare class GroupNode extends FolderNode {
    constructor(options: GroupNodeOptions);
    get transform(): Matrix4;
    set transform(value: Matrix4);
}
