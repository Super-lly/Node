const express = require('express')
const http = require('http');
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('./static/public'))

app.get('/',(req,res)=>{
  // res.sendFile(__dirname+'/static/public/index.html')
  res.send('1')
})

io.on('connection',(socket)=>{
  socket.on('receive',(data)=>{
    socket.broadcast.emit('message',data)
  })
})

server.listen(3000,'localhost',() => {
  console.log('listening on *:3000');
});