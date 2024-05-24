import { Server } from 'ws';

export const startWebSocketServer = (server: Server) => {
  server.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
    });

    ws.send('something');
  });
};
