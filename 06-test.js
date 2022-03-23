function waitFive(name,function_name){
    var pus=0;
    var currentDate=new Date();
    while(pus<5000){
        var now=new Date();
        pus=now-currentDate;
    }

    function_name(name);
}

function echo(name){
    console.log(name);
}

waitFive('lili',echo);
console.log("it's over");