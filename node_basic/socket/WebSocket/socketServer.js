const webSocket = require("ws")

const wss = new webSocket.Server({ port: 2233 })

wss.on('connection', function connection(ws) {
  ws.on('open',function open(){
    console.log("connected");
    ws.send('1')
  })

  ws.on('message', function message(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === webSocket.OPEN) {
        client.send(data.toString());
      }
    })
  })

  ws.on('close',function close(){
    console.log('disconnected');
  })
})