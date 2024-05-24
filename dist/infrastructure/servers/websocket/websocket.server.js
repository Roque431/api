"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = require("http");
const websocket_events_1 = require("./websocket.events");
const PORT = 8080;
const httpServer = (0, http_1.createServer)();
const wss = new ws_1.Server({ server: httpServer });
(0, websocket_events_1.startWebSocketServer)(wss);
httpServer.listen(PORT, () => {
    console.log(`Servidor WebSocket corriendo en http://localhost:${PORT}`);
});
