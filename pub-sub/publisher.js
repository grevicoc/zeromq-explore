var zmq = require("zeromq"),
  sock = zmq.socket("pub");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Publisher bound to port 3000");

let divider = 0;
setInterval(function() {
  if (divider % 2 === 0){
    console.log("sending a multipart EVEN message envelope");
    sock.send(["kitty cats", "meow!"]);
  }else{
    console.log("sending a multipart ODD message envelope");
    sock.send(["kitty dogs", "guk!"]);
  }
  divider++;
}, 2000);