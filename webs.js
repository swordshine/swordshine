var http=require("http");

http.createServer(function(req,res){
    //传输数据包 包头 包体
    //req请求数据包  res响应数据包
    //通过URL向Server提供REQ请求
    //通过Server向浏览器提供RES请求
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Hello World");

    //  向http://localhost:3000/   地址/ 发起请求
}).listen(3000);

console.log("server start port 3000");