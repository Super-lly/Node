const net = require("net")
const db = require("../db/index")

let port = '2233'
// let host = '47.112.187.95'

const server = new net.createServer()

let clients = []
let clientsId = 0
let environmentData = {}
let sql = 'insert ignore into ev_endata set ?'

server.on('connection', socket => {
  socket.name = ++clientsId
  clients[socket.name] = socket
  socket.on('data', msg => {
    broadcast(socket, msg.toString())
    let time = Date.now()
    let msg1 = msg.toString()
    let msgObj = eval("(" + msg1 + ")")
    // console.log(time);
    if (Object.getPrototypeOf(msgObj) === Object.prototype && msgObj != {}) {
      environmentData = {
        ...msgObj,
        time,
        lux : msgObj.lux + '%' || ''
      }
      db.query(sql, environmentData, (err, result) => {
        if (err) return console.log(err);
        if (result.affectedRows != 1) return console.log('数据错误，请检查数据库或数据源');
        console.log('数据添加成功');
      })
    }
  })

  socket.on('error', err => {
    console.log("error:" + err);
    socket.end()
  })

  socket.on('close', () => {
    delete clients[socket.name]
    console.log('用户' + socket.name + "下线了");
  })

  function broadcast(socket, msg) {
    for (let key in clients) {
      clients[key].write('用户' + socket.name + ':' + msg)
    }
  }
})

// server.listen(port,host,()=>{
server.listen(port, () => {
  console.log('server on', server.address());
})