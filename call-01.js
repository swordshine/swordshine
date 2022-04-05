//任何对象都源于Object

function Class1(){
    this.showTxt=function(){
        console.log(this.name);
    }
}

var obj=new Object();
obj.name="zhangsan";
//console.log(obj);
Class1.call(obj); 
//在Class1类里面加入this.name="zhangsan";
//把Class1类中成员方法和成员属性全部付给了obj
obj.showTxt();
//console.log(obj);