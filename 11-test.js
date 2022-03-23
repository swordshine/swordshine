//http四大关键字 Get Post Put Delete
//Get形式   http://www.baidu.com/s?wd=javascript
//http://localhost:3000/test?name=laowu
//http://localhost:3000/test?name=laowu&age=25
// querystring 序列化 反序列化 obj->string string->obj
// eval("("+str+")")  var str='{"name":"laowu","age":"25"}'
//url.parse querystring.parse 

var http=require('http');
var url=require('url');
var querystring=require("querystring");

http.createServer(function(req,res){
    //req.url
    //console.log(url.parse(req.url).query);
    var netstr=url.parse(req.url).query;
    //console.log(netstr);
    var netobj=querystring.parse(netstr);

    console.log(netobj);
    
    //var netobj=netstr.split('=');
    //console.log(netobj[1]);

    //string obj  name=laowu  {"name":"laowu"}

}).listen(3000);

console.log("server start port 3000");