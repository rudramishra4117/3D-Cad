// Start the live bridge that connects the browser session to the MCP server.
//   npm run bridge -w @dronecad/mcp   (optionally pass a port)

import { DEFAULT_BRIDGE_PORT } from "../src/bridge/protocol";
import { startBridge } from "../src/bridge/server";

const port = Number(process.argv[2] ?? DEFAULT_BRIDGE_PORT);
startBridge(port);
console.error(`dronecad live bridge listening on ws://localhost:${port}`);
console.error("Open the app at http://localhost:8080/?live and point the MCP server here.");
