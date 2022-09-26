var zmq       = require('zeromq')
  , requester = zmq.socket('req');

requester.connect('tcp://localhost:5559');
var replyNbr = 0;
requester.on('message', function(msg) {
  console.log('got reply too: ', replyNbr, msg.toString());
  replyNbr += 1;
});