import type { CommandKeys } from "../command";
import { ObservableCollection } from "../foundation/collection";
import { Observable } from "../foundation/observer";
import type { I18nKeys } from "../i18n";
import type { PulldownButton, PushButton, SplitButton } from "./button";
export type RibbonTabKeys = {
    [P in I18nKeys]: P extends `ribbon.tab.${infer _}` ? P : never;
}[I18nKeys];
export type RibbonGroupKeys = {
    [P in I18nKeys]: P extends `ribbon.group.${infer _}` ? P : never;
}[I18nKeys];
export type RibbonCommand =
    | CommandKeys
    | ObservableCollection<CommandKeys>
    | PushButton
    | PulldownButton
    | SplitButton;
export type RibbonGroupProfile = {
    groupName: RibbonGroupKeys;
    items: (RibbonCommand | CommandKeys[])[];
    collapsedItems?: CommandKeys[];
};
export declare class RibbonGroup extends Observable {
    readonly items: ObservableCollection<RibbonCommand>;
    readonly collapsedItems: ObservableCollection<CommandKeys>;
    get groupName(): RibbonGroupKeys;
    set groupName(value: RibbonGroupKeys);
    constructor(groupName: RibbonGroupKeys, items: RibbonCommand[], collapsedItems?: CommandKeys[]);
    static fromProfile(profile: RibbonGroupProfile): RibbonGroup;
}
export type RibbonTabProfile = {
    tabName: RibbonTabKeys;
    groups: RibbonGroupProfile[];
};
export declare class RibbonTab extends Observable {
    readonly groups: ObservableCollection<RibbonGroup>;
    get tabName(): RibbonTabKeys;
    set tabName(value: RibbonTabKeys);
    constructor(tabName: RibbonTabKeys, ...groups: RibbonGroup[]);
    static fromProfile(profile: RibbonTabProfile): RibbonTab;
}
export declare class Ribbon extends Observable {
    readonly quickCommands: ObservableCollection<CommandKeys>;
    readonly tabs: ObservableCollection<RibbonTab>;
    private preTab;
    constructor(quickCommands: CommandKeys[], tabs: RibbonTab[]);
    combineRibbonTab(tabProfile: RibbonTabProfile): void;
    addRibbonCommand(tabName: RibbonTabKeys, groupName: RibbonGroupKeys, command: RibbonCommand): void;
    get activeTab(): RibbonTab;
    set activeTab(value: RibbonTab);
    setActiveTab(tabName: RibbonTabKeys): void;
    openEditTab(): void;
    closeEditTab(): void;
    get editableTabs(): ReadonlyArray<RibbonTabKeys>;
    set editableTabs(value: RibbonTabKeys[]);
    get hiddenTabs(): ReadonlyArray<RibbonTabKeys>;
    set hiddenTabs(value: RibbonTabKeys[]);
}
