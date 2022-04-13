const net = require("net")
/*
const client = net.createConnection({port:2233},()=>{
  console.log('connected on server');
  client.write('This from Client')
})

client.on('data',(data)=>{
  console.log(data.toString());
})

client.on('end',()=>{
  console.log('disconnected');
})
*/

let readline = require('readline')

const client = new net.Socket()

let port = 2233
let host = '47.112.187.95'

client.setEncoding = 'UTF-8'

client.connect(port, host, () => {
  client.write('来了！')
})

client.on('data', (msg) => {
  console.log(msg.toString());
  say()
})

client.on('error', (err) => {
  console.log('error：' + err);
})

client.on('close', () => {
  console.log('connection closed');
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function say() {
  rl.question('>', (inputMsg) => {
    if (inputMsg != 'run') {
      client.write(inputMsg + '\n')
    } else {
      client.destroy()
      rl.close();
    }
  });
}