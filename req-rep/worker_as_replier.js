// @/worker.js
const zmq = require("zeromq");

const sock = new zmq.socket("rep");

const main = async () => {
  try {
    sock.connect("tcp://localhost:7777");
    // for await (const [msg] of sock) {
    //   const text = JSON.parse(msg).text;
    //   console.log(`Received: ${text}`);
    //   await sock.send(String(text.length));
    // }
    sock.on("message", async function(msg) {
      const text = JSON.parse(msg).text;
      console.log(`Received: ${text}`);
      await sock.send(String(text.length));
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();