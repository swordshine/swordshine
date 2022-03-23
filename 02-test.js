for(var i=1;i<=3;i++){
    setTimeout(function(){
        console.log(i);
    },0)
}

/*
for(){}  i++  i=4
event loop
setTimeout(function(){
    console.log(i);
},0)
setTimeout(function(){
    console.log(i);
},0)
setTimeout(function(){
    console.log(i);
},0)*/