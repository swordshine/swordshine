var util=require("util");
var Animal=require("./Animal.js");

function Bird(){
    Animal.call(this);
    util.inherits(Bird,Animal);
    
    this.say=function(){
        console.log("gi...gi");
    }
}

var bird=new Bird();
exports.say=bird.say;

