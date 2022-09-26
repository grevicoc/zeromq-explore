// @/server.js
const Fastify = require("fastify");
const app = Fastify();

const zmq = require("zeromq");
const sock = new zmq.socket("req");

app.post("/", async (request, reply) => {
  const { text } = request.body;
  await sock.send(JSON.stringify({ text }));
  let result = "";
  await sock.on("message", function(message) {
    console.log(`message received from worker: ${message}`);
    // result = message;
  })

  // console.log(result);
  // return reply.send({ length: result.toString() });
});

const main = async () => {
  try {
    await sock.bind("tcp://*:7777");
    await app.listen(3000);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();