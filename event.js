var event = require('events');
 var eventEmitter = new event.EventEmitter();

 eventEmitter.on('bobm',function(args1,args2){
       console.log('bomb引燃，引燃使用的是:'+args1+" 和"+arg2)
 });

eventEmitter.on('bobm',function(args1,args2){
       console.log('bomb引燃，使用的是:'+args1+"或者 "+arg2)
 });
eventEmitter.emit('bobm',(44444,444))
