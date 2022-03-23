var http=require("http");
var url=require("url");
var fs=require("fs");


//加载文件  就是把文件读取到内存 读文件的前提就是要找到文件路径 调用读文件API
//readFile readFileSync
//


http.createServer(function(req,res){

    //console.log(url.parse('index.html'));
    res.writeHead(200,{"Content-type":"text/html"});
    //1、找到文件路径
    //console.log(__dirname);
    var readPath=__dirname+'/module/'+url.parse("index.html").pathname;
    //2、加载读取文件
    var indexPage=fs.readFileSync(readPath);
    res.end(indexPage);
    
}).listen(3000);

console.log("server start port 3000");