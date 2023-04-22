// localStorage.getItem("connection")
const url="ws://192.168.4.1:8266"
const socket = new WebSocket(url)
socket.binaryType = 'arraybuffer';
let count = 0 ;
let raw_repl_trigger = "\x1B\x61"
socket.addEventListener('message', (event) => {
    if(count==0){
      console.log('Message from server ', event.data);
      socket.send("anton\x0D")
      count++;
    }
    else if(count==1){
      console.log('Init Raw REPL')
      socket.send("\x01");
      count++;
    }
    else{
      console.log('Message from server ', event.data);
      lastmes = event.data;
      count++;
    }
});

function sendcodetorobot(code){

}
function sendcodetest(code){
  socket.send(code)
}
function execute(){
  socket.send("\x04")
}