/*
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },200);
}*/

//把异步变同步

for(var i=0;i<10;i++){
    var m=i;
    exec(m,function(m){
        console.log(m);
    });
}

function exec(param,callback){
    setTimeout(function(){
        callback(param);
    },200);
}


//异步变同步的模型
/*
var A=new Array  // [1,2,3,4,5];
for(var i=0;i<A.length;i++){
    a=A[i];
    B(a,function(a){
        console.log(a);
    })
}


*/



