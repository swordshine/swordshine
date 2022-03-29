var util=require("util");
var events=require("events");

function MyStream(){
    events.EventEmitter.call(this);
}

util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write=function(data){
    this.emit("data",data);
}

var stream=new MyStream();
console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_ ===events.EventEmitter);

stream.on("data",function(data){
    console.log("Received data : "+data);
});

//zoo lion tiger bear wolf ape chimp snake zebra trip clothes suitcase map car seatbelt dog book 


