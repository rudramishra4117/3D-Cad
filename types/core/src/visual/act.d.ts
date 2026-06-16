import { Observable } from "../foundation";
import type { XYZ } from "../math";
import type { IView } from "./view";
export interface ActOptions {
    name: string;
    cameraPosition: XYZ;
    cameraTarget: XYZ;
    cameraUp: XYZ;
}
export declare class Act extends Observable {
    get name(): string;
    set name(value: string);
    get cameraPosition(): XYZ;
    set cameraPosition(value: XYZ);
    get cameraTarget(): XYZ;
    set cameraTarget(value: XYZ);
    get cameraUp(): XYZ;
    set cameraUp(value: XYZ);
    static fromView(view: IView, name: string): Act;
    constructor(options: ActOptions);
}
