function DD(){
    var c=90;
    this.b=456
    //console.log(c);
    this.aa=function(){
        //console.log(this.b);
        console.log(c);
    }
}

module.exports=DD;

/*
<script src='1.js'></script>  10K
<script src='2.js' async></script> 1K
2.js --->   1.js 定义 */

//var dd=new DD();
//dd.aa();
//console.log(dd.b);
//console.log(dd.c);
