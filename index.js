var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");
var dns=require("dns");

var router=require("./router.js");

//模块分为三种  系统模块 第三方模块 自定义模块

http.createServer(function(req,res){
    // http://localhost:3000/parse  /parse
    var pathname=url.parse(req.url).pathname;

    router.router(pathname,req,res);

    //pathname传递给router.js

    
}).listen(3000);

console.log("server start port 3000");