var async = require('async');
var ctx = require('../context');
// var BSData = ctx.getLib('lib/model/bsdata');

//var data = new Buffer('hello')
// var data = "hello\nworld"
//
// var bsdata = BSData.create(data);
//
// var sel = bsdata.serialize('object');
//
// console.log(sel.data);

var uuid = require('node-uuid');

// console.log(uuid.v1());
//
const crypto = require("crypto");
//
//
//
// const id = crypto.randomBytes(16).toString("hex");
//
// console.log(id);

// var bss_handler = ctx.getLib('storage-service/lib/bss_engine');
//
// var bss = bss_handler.create('d:/testfile/new/slash/hnd.bss');
// bss.open(function(err){
//   console.log('open');
// });

//var Db = ctx.getLib('storage-service/lib/db');

//var database = Db.create({'repos_dir':'D:/testfile'});

// var req = {
//     'object_type' : 'storage_request',
//     'command' : 'write',
//     'storage_name' : 'gcs.file.test',
//     'meta' : {'name':'gcs'},
//     'resource' : {
//       'value' : 'Kamron Aroonrua'
//     }
// }

// var req = {
//     'object_type' : 'storage_request',
//     'command' : 'write',
//     'param' : {
//       'storage_name' : 'gcs.file.test',
//       'meta' : {'name':'gcs'},
//       'data' : {
//         'type' : 'bsdata',
//         'value' : {
//           'data_type' : 'string',
//           'data' : 'AA00FFCC'
//         }
//       }
//     }
// }
//
// database.request(req,function(err,res){
//   console.log(res);
// });

// var Redis = require("ioredis");
// var redis = new Redis({
//   port: 6379,          // Redis port
//   host: 'lab1.igridproject.info',   // Redis host
//   db: 0
// })

// var redis = new Redis('redis://:@lab1.igridproject.info:6379/4')
// var a = [];
// a.push({'appkey':'test-igrid','method':'get','jobid':'igrid'});
// a.push({'appkey':'ibitz-test','method':'get','jobid':'ibitz'});

// atext = JSON.stringify(a);
// redis.set('a',atext)

// var HttpACL = ctx.getLib('lib/mems/http-acl');
//
// var httpacl = HttpACL.create({'conn':'redis://:@bigmaster.igridproject.info:6379/1'});
//
// httpacl.add({'appkey':'app1','method':'get','jobid':'job1'})
// httpacl.add({'appkey':'app2','method':'get','jobid':'job2'})
// httpacl.add({'appkey':'app1','method':'get','jobid':'job3'})
// httpacl.commit();
//
// httpacl.update(function(err){
//   //console.log(httpacl.acl);
//   var j = httpacl.findJob('app1','get');
//   console.log(j);
// });

// var EvenPub = ctx.getLib('lib/amqp/event-pub');
//
// var evp = new EvenPub({'url':'amqp://bigmaster.igridproject.info','name':'topic_logs'});
//
// evp.send('q.test.t1','kamron aroonrua');
// evp.send('q.test.t1','kamron aroonrua aaa');
//
// setTimeout(function() { evp.close(function(err){console.log('close');}); }, 1500);

// var EvenSub = ctx.getLib('lib/amqp/event-sub');
//
// var evs = new EvenSub({'url':'amqp://bigmaster.igridproject.info','name':'bs_storage'});
//
// evs.sub('storage.sds.#',function(err,msg){
//   console.log(msg);
// });

// var memstore = ctx.getLib('jobexecutor/lib/memstore');
//
// var ms = new memstore({'job_id':'job01','cat':'global','conn':'redis://:@bigmaster.igridproject.info:6379/1'})
//
// var txt = "kamron\naroonrua"
//
// ms.setItem('test1',{'t':txt});
// ms.getItem('test1',function(err,val){
//   console.log(val.t);
// });

var redis = require('redis');
// var handle = {'mem' : redis.createClient('redis://bigmaster.igridproject.info:6379/1')}
// var input_data = {};
var job_config = {
  "job_id" : "example",
  "active" : true,
  "trigger" : {
    "type": "cron",
    "cmd": "29,59 * * * * *"
  },
  "data_in" : {
    "type": "example"
  },
  "data_transform" : {
    "type": "noop"
  },
  "data_out" : {
    "type": "console"
  }
}
//
// var ag = {
//   "job_id" : "agritronics-gistda-01",
//   "active" : true,
//   "trigger" : {
//     "type": "cron",
//     "cmd": "15,45 * * * *"
//   },
//   "data_in" : {
//     "type": "agritronics",
//     "profile": {
//       "station_id": "GISDA-01",
//       "latitude": "",
//       "longitude": ""
//     },
//     "param": {
//       "url": "http://agritronics.nstda.or.th/ws/get.php",
//       "appkey": "0c5a295bd8c07a081f4f0061eee6665c38",
//       "station_id": "GISTDA-01",
//       "data_types": [
//         {"type": "1", "node_id": "4096"},
//         {"type": "2", "node_id": "4096"},
//         {"type": "4", "node_id": "4096"},
//         {"type": "5", "node_id": "4096"},
//         {"type": "6", "node_id": "4096"},
//         {"type": "7", "node_id": "4096"},
//         {"type": "8", "node_id": "4096"},
//         {"type": "10", "node_id": "4096"},
//         {"type": "2021", "node_id": "7328"},
//         {"type": "2022", "node_id": "7328"}
//       ],
//       "init_observed_date": "2017-03-10",
//       "init_observed_time": "12:00:00"
//     }
//   },
//   "data_transform" : {
//     "type": "agritronics"
//   },
//   "data_out" : {
//     "type": "console"
//   }
// }


// var JobTask = ctx.getLib('jobworker/lib/jobtask');
//
// var job = new JobTask({
//                         'handle' : handle,
//                         'job_config' : job_config,
//                         'input_data' : input_data,
//                         'opt' : {'job_timeout' :30000}
//                       });
// job.on('done',function(res){
//   console.log(res);
// });
//job.run();

// async.reduce([1,2,3], 0, function(memo, item, callback) {
//     // pointless async:
//     process.nextTick(function() {
//         console.log(String(memo) + ' ' +  String(item));
//         callback(null, memo + item)
//     });
// }, function(err, result) {
//
//     if(err){
//       console.log(err);
//     }else{
//       console.log(result);
//     }
// });


// var client = redis.createClient('redis://lab1.igridproject.info:6379/1');
// //var client = redis.createClient('redis://localhost:9736/1');
//
// client.hgetall('bs:regis:triggers', function (err, rep) {
//   Object.keys(rep).forEach(function(a,b){
//     console.log(b);
//   })
//   //console.log(Object.keys(rep));
// });
//client.hset('bs:regis:triggers','job01',JSON.stringify(job_config));

// var CronList = ctx.getLib('lib/mems/cronlist');
//
// var crons = CronList.create({'conn':'redis://:@bigmaster.igridproject.info:6379/1'});
//
// crons.add({'name':'job01','cmd':'*/10 * * * * *','jobid':'job01'})
// crons.commit();
//
// crons.update(function(err){
//   console.log(crons.list);
// });

// var hash = require('object-hash');
// var dat = {'a':'hello','b':10};
// var dat2 = new Buffer(10);
// console.log(dat2);
// console.log(hash(dat2));

// var Git = require("nodegit");
//
// Git.Clone("https://github.com/igridproject/bigstream-docker.git", "../bigstream-docker").then(function(repository) {
//   // Work with the repository object here.
//   console.log(repository);
// });

// var exec = require('child_process').exec;
// exec('npm install',{'cwd':'../plugins/dt/dt-agritronics'}, function(error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

var PluginManager = ctx.getLib('lib/plugin/plugin-manager');

var pm = PluginManager.create();
//pm.npm_install_plugin('dt','agritronics')
console.log(pm.list('di'));
