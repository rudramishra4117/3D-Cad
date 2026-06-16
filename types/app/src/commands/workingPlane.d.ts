import { type IApplication, type ICommand, type IStep, Observable, SelectableItems } from "@dronecad/core";
import { MultistepCommand } from "./multistepCommand";
export declare class WorkingPlaneViewModel extends Observable {
    planes: SelectableItems<string>;
}
export declare class SetWorkplane implements ICommand {
    execute(application: IApplication): Promise<void>;
    private ui;
}
export declare class AlignToPlane implements ICommand {
    execute(application: IApplication): Promise<void>;
}
export declare class FromSection extends MultistepCommand {
    protected executeMainTask(): void;
    private findXVec;
    protected getSteps(): IStep[];
    private transformedCurve;
    private readonly handlePointData;
}
