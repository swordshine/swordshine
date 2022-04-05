function Class1(){
    this.name="class1";
    this.showTxt=function(){
        console.log(this.name);
    }
}
Class1.prototype.aa=function(){
    console.log(123);
}
var class1=new Class1();
class1.showTxt();
class1.aa();
var obj=new Object();
Class1.call(obj);
obj.name="zhangsan";
obj.showTxt();
obj.aa();


//var class1=new Class1();
//class1.showTxt();
//class1.aa();