var ws = new WebSocket('ws://localhost:2233/')

ws.onopen = ()=>{
  ws.send('1')
}

ws.onmessage = (msg)=>{
  const content = document.querySelector('#content')
  console.log(msg);
  content.innerHTML += msg.data +'<br/>'

}

ws.onerror=(err)=>{
  console.log(err);
}

ws.close=()=>{
  console.log('closed');
}