"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWebSocketServer = void 0;
const startWebSocketServer = (server) => {
    server.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log('received: %s', message);
        });
        ws.send('something');
    });
};
exports.startWebSocketServer = startWebSocketServer;
