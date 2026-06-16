import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
/**
 * Build the DroneCAD MCP server. Tools share one headless application and keep
 * in-progress documents in a session map, so an AI can build incrementally:
 *   new_document -> run_cad_program -> get_document_state / render -> export.
 * The model is always a parametric .cd node tree (editable in the app), not a mesh.
 */
export declare function createServer(): McpServer;
