var util = require('util');
var EventEmitter = require('events').EventEmitter;

function DTPlugin(context,request){
  EventEmitter.call(this);

  this.version = '0.1';
  this.name = 'base';
  this.jobcontext = context;
  this.request = request;
  this.outputdata = null;
}
util.inherits(DTPlugin, EventEmitter);

DTPlugin.prototype.getname = function(){
  return this.name;
}

DTPlugin.prototype.perform = function(){}

DTPlugin.prototype.run = function(){
  this.emit('start');
  var resp = new DTResponse(this);
  this.perform(this.jobcontext,this.request,resp);
}

module.exports = DTPlugin;


/*
  DTResponse
*/

function DTResponse(handle){
  this.handle = handle;
  this.status = null;
  this.data = null;
  this.output_type = '';
}

DTResponse.prototype.success = function(data,type){
  var self=this;
  var handle = this.handle;
  this.data = data;
  this.status = 'success';
  if(type){this.output_type=type;}
  process.nextTick(function(){
    handle.emit('done',{'status':'success','data':data,'type':self.output_type});
  });

}

DTResponse.prototype.error = function(err){
  var self=this;
  var handle = this.handle;
  this.data = err;
  this.status = 'error';
  process.nextTick(function(){
    handle.emit('done',{'status':'error','data':err});
  });
}

DTResponse.prototype.reject = function(){
  var handle = this.handle;
  this.status = 'reject';
  process.nextTick(function(){
    handle.emit('done',{'status':'reject'});
  });
}