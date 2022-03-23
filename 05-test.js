//异步回调方法
function Person(){
    this.answer=function(){
        console.log("I am answering other question");
    };

    //callback形参  实例化调用think方法(实参)
    this.think=function(callback){
        console.log('thinking ~~~~');
        setTimeout(function(){
            callback();
        },5000);
    }
}

var person=new Person();
person.think(function(){
    console.log("thinking 5 seconds get the right answer");
});
person.answer();