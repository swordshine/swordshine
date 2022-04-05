function Animal(){
    this.say=function(){
        console.log("Noting");
    }
    this.eat=function(){
        console.log("I am eating");
    }
}

Animal.prototype.write=function(){
    console.log("I am writing");
}

module.exports=Animal;