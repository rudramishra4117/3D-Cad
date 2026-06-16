// Measure-only probe: ask the live browser for the current model's properties.
import { BridgeController } from "../src/bridge/controller";

async function main() {
    const c = new BridgeController();
    await c.connect();
    const props = await c.getProperties();
    console.log("PROPS " + (props.data ?? JSON.stringify(props)));
    c.close();
}

main().catch((e) => {
    console.error("ERR " + e);
    process.exit(1);
});
