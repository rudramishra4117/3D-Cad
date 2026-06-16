import type { IDocument } from "../document";
import type { I18nKeys } from "../i18n";
import { BoundingBox } from "../math";
import type { Mesh } from "../shape";
import { VisualNode } from "./visualNode";
export interface MeshNodeOptions {
    document: IDocument;
    mesh: Mesh;
    name: string;
    materialId?: string | string[];
    id?: string;
}
export declare class MeshNode extends VisualNode {
    display(): I18nKeys;
    get materialId(): string | string[];
    set materialId(value: string | string[]);
    protected _mesh: Mesh;
    get mesh(): Mesh;
    set mesh(value: Mesh);
    constructor(options: MeshNodeOptions);
    boundingBox(): BoundingBox | undefined;
}
