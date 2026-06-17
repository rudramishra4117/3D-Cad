import { command, type IApplication, type ICommand, PubSub } from "@dronecad/core";
import { br, div, img, label } from "@dronecad/element";

@command({
    key: "wechat.group",
    icon: "icon-qrcode",
    isApplicationCommand: true,
})
export class WeChatGroup implements ICommand {
    async execute(app: IApplication): Promise<void> {
        PubSub.default.pub("showDialog", "command.wechat.group", this.ui());
    }

    private ui() {
        return div(
            label(
                {
                    style: {
                        fontSize: "14px",
                        display: "block",
                        textAlign: "center",
                        marginBottom: "10px",
                        opacity: "0.75",
                    },
                },
                "200，",
                br(),
                "：oOxianOo",
            ),
            img({
                width: 360,
                src: "images/wechat.jpg",
                style: {
                    borderRadius: "10px",
                },
            }),
        );
    }
}
