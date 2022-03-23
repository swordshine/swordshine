var url=require("url");
var fs=require("fs");
var querystring=require("querystring");
var dns=require("dns");

exports.resIndex=function(res){
    var filepath=__dirname+'/module/'+url.parse('index.html').pathname;
    var indexpath=fs.readFileSync(filepath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexpath);
}

exports.resAdd=function(req,res){
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

exports.resImg=function(res){
    var imgpath=__dirname+'/module/'+url.parse('1.png').pathname;
    var imgreal=fs.readFileSync(imgpath);
    res.writeHead(200,{"Content-type":"image/png"});  //text/plain text/html
    res.end(imgreal);
}

exports.resdefault=function(res){
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("the site no found");
}