//node建立webServer
var http=require("http");

http.createServer(function(req,res){
    //get  http://localhost:3000
    //包  包头 包体 $_GET $_POST echo var_dump print_r
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h1>hello world</h1>");

    //HTTP四大GET POST PUT DELETE

}).listen(3000);

console.log("server start");