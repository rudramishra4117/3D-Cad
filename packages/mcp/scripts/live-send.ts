// Test/demo controller: push a box into the live browser session via the bridge.
//   npx tsx packages/mcp/scripts/live-send.ts

import { BridgeController } from "../src/bridge/controller";
import type { Op } from "../src/bridge/protocol";

const controller = new BridgeController();
await controller.connect();

console.error("state:", JSON.stringify(await controller.getState()));
console.error("new_document:", JSON.stringify(await controller.newDocument("ai-session")));
const box: Op = { op: "box", id: "b", dx: 30, dy: 30, dz: 30 };
console.error("run_cad_program:", JSON.stringify(await controller.runProgram([box])));

controller.close();
