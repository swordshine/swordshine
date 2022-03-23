var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");
var dns=require("dns");

http.createServer(function(req,res){
    // http://localhost:3000/parse  /parse
    var pathname=url.parse(req.url).pathname;

    //修改成多地址的路由

    switch(pathname){
        case '/':
            resIndex(res);
            break;
        case '/parse':
            resAdd(req,res);
            break;
        case '/img':
            resImg(res);
            break;
        default:
            resdefault(res);
            break;
    }
}).listen(3000);

console.log("server start port 3000");

function resImg(res){
    //1、找到图片的路径
    var imgpath=__dirname+'/module/'+url.parse('1.png').pathname;

    //2、将图片加载到内存
    var imgreal=fs.readFileSync(imgpath);

    //3、将内存中的图片打包成数据包发回浏览器
    res.writeHead(200,{"Content-type":"image/png"});  //text/plain text/html
    res.end(imgreal);
}

function resIndex(res){
    var filepath=__dirname+'/module/'+url.parse('index.html').pathname;
    var indexpath=fs.readFileSync(filepath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexpath);
}

function resdefault(res){
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("the site no found");
}


function resAdd(req,res){  //用post接收 处理dns
    //www.qq.com  str1+str2
    var postData="";
    req.setEncoding('utf8');

    req.addListener("data",function(postDataChunk){
        postData+=postDataChunk;
    });

    req.addListener("end",function(){
        //console.log(postData);
        var Param=querystring.parse(postData);
        //console.log(Param);
        var dns_str=Param.Search_dns;
        dns.resolve4(dns_str,function(err,addresses){
            if(err){
                console.log(err);
            }else{
                var str=querystring.stringify(addresses);
                res.writeHead(200,{"Content-type":"text/plain"});
                res.end(str);
            }
        })

    });
}

/*
    if(pathname=='/'){
        //加载index.html
        var filepath=__dirname+'/module/'+url.parse('index.html').pathname;
        var indexpath=fs.readFileSync(filepath);
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexpath);
    }else if(pathname=="/parse"){
        //把你提交的www.qq.com 变成IP地址
        resAdd(req,res);   //缓冲区累加
        
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Hello world");
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("the site no found");
    }*/