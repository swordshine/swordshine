function Class1(){
    this.name="class1";
    this.showTxt=function(){
        console.log(this.name);
    }
}

function Class2(){
    this.name='class2';
}

var class2=new Class2();
Class1.call(class2);
class2.showTxt();