var firecount=0;
var start=new Date();
var timer=setInterval(function(){
    if(new Date-start>1000){
        clearInterval(timer);
        console.log(firecount);
        return;
    }
    firecount++;
    console.log(123);
},0);

//有return的叫函数  没有return叫过程
//settimeout setInterval 不是真正的定时
//process.nextTick requestAnimationFrame
//异步是通过事件队列来处理回调函数 但有些异步函数间接取回回调，Promise对象或用Pubsub模式