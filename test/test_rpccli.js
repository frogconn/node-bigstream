var ctx = require('../context');
var amqp_cfg = ctx.config.amqp;

var RPCCaller = ctx.getLib('lib/amqp/rpccaller');

var caller = new RPCCaller({
  url : amqp_cfg.url,
  name :'storage_request'
});

var req = {
    'object_type' : 'storage_request',
    'command' : 'write',
    'param' : {
      'storage_name' : 'gcs.file.test',
      'meta' : {'name':'gcs'},
      'data' : {
        'type' : 'bsdata',
        'value' : {
          'data_type' : 'text',
          'data' : 'kamron'
        }
      }
    }
}

caller.call(req,function(err,resp){
  console.log(resp);
});





// var amqp = require('amqplib/callback_api');
//
// var args = process.argv.slice(2);
//
// if (args.length == 0) {
//   console.log("Usage: rpc_client.js num");
//   process.exit(1);
// }
//
// amqp.connect('amqp://bigmaster.igridproject.info', function(err, conn) {
//   conn.createChannel(function(err, ch) {
//     ch.assertQueue('', {exclusive: true}, function(err, q) {
//       var corr = generateUuid();
//       var num = parseInt(args[0]);
//
//       console.log(' [x] Requesting fib(%d)', num);
//
//       ch.consume(q.queue, function(msg) {
//         if (msg.properties.correlationId == corr) {
//           console.log(' [.] Got %s', msg.content.toString());
//           setTimeout(function() { conn.close(); process.exit(0) }, 500);
//         }
//       }, {noAck: true});
//
//       ch.sendToQueue('rpc_queue',
//       new Buffer(num.toString()),
//       { correlationId: corr, replyTo: q.queue });
//     });
//   });
// });
//
// function generateUuid() {
//   return Math.random().toString() +
//          Math.random().toString() +
//          Math.random().toString();
// }
