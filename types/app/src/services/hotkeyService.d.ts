import { type CommandKeys, type IApplication, type IService } from "@dronecad/core";
export interface Keys {
    key: string;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
}
export interface HotkeyMap {
    [key: string]: CommandKeys;
}
export declare class HotkeyService implements IService {
    protected keys: string[];
    private app?;
    private readonly _keyMap;
    constructor();
    private loadProfile;
    register(app: IApplication): void;
    start(): void;
    stop(): void;
    private readonly executeCommand;
    private readonly handleConfigChanged;
    protected canHandleKey(e: KeyboardEvent): boolean;
    private readonly eventHandlerKeyDown;
    private readonly commandKeyDown;
    getCommand(keys: Keys): CommandKeys | undefined;
    addMap(map: HotkeyMap): void;
}
