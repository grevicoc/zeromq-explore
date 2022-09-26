var zmq = require("zeromq"),
  sock = zmq.socket("sub");

sock.connect("tcp://127.0.0.1:3000");
sock.subscribe("kitty dogs");
console.log("Subscriber connected to port 3000");

sock.on("message", function(topic, message) {
  console.log(
    "received a message related to:",
    topic.toString(),
    "containing message:",
    message.toString()
  );
});

//Insights:
// 1. client zeroMQ nge-subscribe dengan pendekatan prefix sehingga untuk menerima semua topic cukup menuliskan topic yang di-subscribe string kosong.