import { Binding, Config, command, type IApplication, type ICommand } from "@dronecad/core";

@command({
    key: "workingPlane.toggleDynamic",
    toggle: new Binding(Config.instance, "dynamicWorkplane"),
    icon: "icon-dynamicPlane",
})
export class ToggleDynamicWorkplaneCommand implements ICommand {
    async execute(_app: IApplication): Promise<void> {
        Config.instance.dynamicWorkplane = !Config.instance.dynamicWorkplane;
    }
}
