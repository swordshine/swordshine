var name;

//第一种形式的对外公布方法和属性

exports.setName=function(thyname){
    name=thyname;
};


exports.getName=function(){
    console.log('Hello '+name);
}

//第二种形式的对外公布方法和属性

/*
module.exports={
    'setName':function(thyname){
        name=thyname;
    },
    'getName':function(){
        console.log('Hello '+name);
    }
};*/


////第三种形式的对外公布方法和属性
/*
exports.className={
    'setName':function(thyname){
        name=thyname;
    },
    'getName':function(){
        console.log('Hello '+name);
    }
};*/

