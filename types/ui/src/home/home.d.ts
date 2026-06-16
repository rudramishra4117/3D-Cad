import { type IApplication } from "@dronecad/core";
export declare class Home extends HTMLElement {
    readonly app: IApplication;
    constructor(app: IApplication);
    private hasOpen;
    private getDocuments;
    render(): Promise<void>;
    private leftSection;
    private logoSection;
    private applicationCommands;
    private currentDocument;
    private settings;
    private rightSection;
    private documentCollection;
    private recentDocument;
    private documentDescription;
    private deleteIcon;
    private handleDocumentClick;
}
