import { Id } from "../foundation";
import type { I18nKeys } from "../i18n";
import { serializable, serialize } from "../serialize";
import { FolderNode, type FolderNodeOptions } from "./folderNode";

export interface SketchNodeOptions extends Omit<FolderNodeOptions, "name"> {
    referencePlaneId?: string;
    name?: string;
}

@serializable()
export class SketchNode extends FolderNode {
    @serialize()
    referencePlaneId?: string;

    constructor(options: SketchNodeOptions) {
        super({
            document: options.document,
            id: options.id,
            name: options.name || "Sketch",
        });
        this.referencePlaneId = options.referencePlaneId;
    }
}
