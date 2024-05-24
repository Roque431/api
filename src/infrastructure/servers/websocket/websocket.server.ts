import { Server } from 'ws';
import { createServer } from 'http';
import { startWebSocketServer } from './websocket.events';

const PORT = 8080;

const httpServer = createServer();
const wss = new Server({ server: httpServer });

startWebSocketServer(wss);  

httpServer.listen(PORT, () => {
  console.log(`Servidor WebSocket corriendo en http://localhost:${PORT}`);
});
