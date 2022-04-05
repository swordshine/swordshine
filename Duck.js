var util=require("util");
var Animal=require("./Animal.js");
function Duck(){
    Animal.call(this);
    util.inherits(Duck,Animal);
    this.say=function(){
        console.log("ga....ga");
    }
}

//var duck=new Duck();
//module.exports=duck;
module.exports=Duck;