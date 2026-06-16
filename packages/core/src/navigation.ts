import { Config } from "./config";

export const Navigation3DTypes = ["Blender", "Solidworks"] as const;

export type Navigation3DType = (typeof Navigation3DTypes)[number];

export class Navigation3D {
    static getKey(event: MouseEvent) {
        let key = "Middle";
        if (event.shiftKey) {
            key = "Shift+" + key;
        }
        if (event.ctrlKey) {
            key = "Ctrl+" + key;
        }
        if (event.altKey) {
            key = "Alt+" + key;
        }
        return key;
    }

    static navigationKeyMap(): {
        pan: string;
        rotate: string;
    } {
        const functionKey = {
            ["Blender"]: {
                pan: "Shift+Middle",
                rotate: "Middle",
            },
            ["Solidworks"]: {
                pan: "Ctrl+Middle",
                rotate: "Middle",
            },
        } satisfies Record<
            Navigation3DType,
            {
                pan: string;
                rotate: string;
            }
        >;
        return functionKey[Config.instance.navigation3D];
    }
}
