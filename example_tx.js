var dmxlib=require('./lib.js');
var dmxnet = new dmxlib.dmxnet({verbose:3});
var sender=dmxnet.newSender({ip:"127.0.0.1"});