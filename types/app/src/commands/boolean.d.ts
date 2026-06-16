import { type IStep } from "@dronecad/core";
import { MultistepCommand } from "./multistepCommand";
export declare abstract class BooleanOperate extends MultistepCommand {
    protected executeMainTask(): void;
    private getBooleanShape;
    protected abstract getBooleanOperateType(): "common" | "cut" | "fuse";
    protected getSteps(): IStep[];
}
export declare class BooleanCommon extends BooleanOperate {
    protected getBooleanOperateType(): "common" | "cut" | "fuse";
}
export declare class BooleanCut extends BooleanOperate {
    protected getBooleanOperateType(): "common" | "cut" | "fuse";
}
export declare class BooleanFuse extends BooleanOperate {
    protected getBooleanOperateType(): "common" | "cut" | "fuse";
}
