//node原生继承 inherit  ES6 class 
//父类成员函数 成员方法全部copy给子类 子类可以访问父类的构造函数
//constructor()
//c++ java super() php parent::__constructor()
//node所有的模块 都要继承自events.eventEmitter(on once emit)
//event loop 触发事件：时间IO（setTimeout setInterval）
//磁盘IO 网络IO 自定义事件
var util=require("util");
var events=require("events");

//ES5 function有class 同时function也是构造函数
//call只能copy父类中的成员属性和成员方法 
//不能copy原型链上的方法prototype下定义的方法
function Mystream(){
    events.EventEmitter.call(this);
}
util.inherits(Mystream,events.EventEmitter);
Mystream.prototype.write=function(data){
    this.emit("data",data);
}
var stream=new Mystream();
console.log(stream instanceof events.EventEmitter);
stream.on("data",function(data){
    console.log("Received data : "+data);
});
stream.write("It work!");



/*
class Demo{
    constructor(){
        this.a=123;
        this.b=456;
    }

    write(){

    }
}

class XX extends Demo{
    constructor(){

    }
} */
