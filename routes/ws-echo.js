const WebSocket = require('ws');
const createEchoServer = server=>{
    const wsServer = new WebSocket.Server({server});

    wsServer.on('connection', (ws, req)=>{
        console.log('size: ', wsServer.clients.size);
        ws.on('message', message=>{
            ws.send(message.toString());
        });
    })
};

module.exports = createEchoServer;