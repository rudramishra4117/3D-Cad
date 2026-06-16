import type { ProjectView } from "./projectView";
export declare class ToolBar extends HTMLElement {
    readonly projectView: ProjectView;
    constructor(projectView: ProjectView);
    private render;
    private button;
    private readonly newGroup;
    private readonly expandAll;
    private readonly unExpandAll;
    private setExpand;
    private setNodeExpand;
}
