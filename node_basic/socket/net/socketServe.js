const net = require("net")
/*
const server = net.createServer(socket=>{
  socket.write("This from Server")

  socket.on('data',chunk=>{
    console.log(chunk.toString());
  })
})

server.on('error',err=>{
  throw err
})

server.listen('2233',()=>{
  console.log('server on',server.address());
})
*/

const server = new net.createServer()

let clients = []
let clientsId = 0

server.on('connection',socket=>{
  socket.name = ++clientsId
  clients[socket.name] = socket

  socket.on('data',msg=>{
    broadcast(socket,msg.toString())
  })

  socket.on('error',err=>{
    console.log("error:"+err);
    socket.end()
  })

  socket.on('close',()=>{
    delete clients[socket.name]
    console.log('用户'+socket.name+"寄了");
  })

  function broadcast(socket,msg){
    for(let key in clients){
      clients[key].write('用户'+socket.name+':'+msg)
    }
  }
})

server.listen('2233',()=>{
  console.log('server on',server.address());
})