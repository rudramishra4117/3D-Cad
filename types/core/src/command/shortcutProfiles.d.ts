import type { Navigation3DType } from "../navigation";
import type { CommandKeys } from "./commandKeys";

type ShortcutMap = Partial<Record<CommandKeys, string | string[]>>;
export declare const DroneCADShortcuts: ShortcutMap;
export declare const DefaultShortcuts: ShortcutMap;
export declare const RevitShortcuts: ShortcutMap;
export declare const BlenderShortcuts: ShortcutMap;
export declare const SolidworksShortcuts: ShortcutMap;
export declare const CreoShortcuts: ShortcutMap;
export declare const ShortcutProfiles: Record<Navigation3DType, ShortcutMap>;
