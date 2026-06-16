import type { CommandData } from "./commandData";
import { type CommandConstructor } from "./commandStore";
export declare function command<T extends CommandConstructor>(metadata: CommandData): (ctor: T) => void;
