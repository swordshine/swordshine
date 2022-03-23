// qq.com sohu.com baidu.com
var http=require('http');

var urls=['www.qq.com','www.sohu.com','www.baidu.com'];

function fetchPage(url){
    var start=new Date();
    http.get({host:url},function(res){
        console.log("Got Respone from :"+url);
        console.log("Request took : ",new Date()-start,'ms');
    })
}

for(var i=0;i<urls.length;i++){
    fetchPage(urls[i]);
}