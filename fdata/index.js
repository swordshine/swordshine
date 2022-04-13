var http=require("http");
var url=require("url");
var Routers=require("./routers.js");

http.createServer(function(req,res){
    //1、获取URL；
    //console.log(req.url);
    var pathname=url.parse(req.url).pathname;
    //2、要根据URL进行路由操作
    Routers.routers(req,res,pathname);
}).listen(3000);

console.log("server start port 3000");