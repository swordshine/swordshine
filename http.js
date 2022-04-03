//js、img、css、html
var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer(function(req,res){
    //根据地址的不同来处理不同的业务  /  加载index.html  其他地址都交给静态资源处理函数处理
    //1、接收到浏览器发送过来的地址
    var pathname=url.parse(req.url).pathname;
    //console.log(req.url);
    //2、明确存放静态资源的目录
    var realPath=__dirname+'/static'+pathname;
    //3、通过if来判断网络地址对应的函数方法
    if(pathname=='favicon.ico'){
        return;
    }else if(pathname=='/index' || pathname=="/"){
        goIndex(res);
    }else{
        //通过静态资源的函数将index.html中的所有静态资源回传回去并解析
        dealWithStatic(pathname,realPath,res);
    }
 
}).listen(3000);
console.log("server start port 3000");
function goIndex(res){
    var readPath=__dirname+'/'+url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readPath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);
}

function dealWithStatic(pathname,realPath,res){
    //console.log(123);  /img 1.png /css style.css
    //console.log(pathname);
    fs.exists(realPath,function(exists){
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("The request url is wrong");
        }else{
            //console.log(pathname);
            //要判断传递回去的文件是什么类型（根据文件后缀来判别）通过切割pathname获取后缀 /style.css /1.png 
            var pointPostion=pathname.lastIndexOf('.');  //拿到.在字符串中的索引
            var mmieString=pathname.substring(pointPostion+1);
            var mmieType;

            switch(mmieString){
                case "css" :
                    mmieType='text/css';
                    break;
                case "png" :
                    mmieType='image/png';
                    break;
                default :
                    mmieType='text/plain';
            }

            fs.readFile(realPath,"binary",function(err,file){
                if(err){
                    res.writeHead(500,{"Content-type":"text/plain"});
                    res.end(err);
                }else{
                    res.writeHead(200,{"Content-type":mmieType});
                    res.write(file,'binary');
                    res.end();
                }
            })
        }
    })
}


//template  模版语言  template、html、ejs、jade

   /*
    //1、先把index.html路径明确
    var pathname=__dirname+'/'+url.parse("index.html").pathname;
    //2、将index.html读取到内存
    var indexPage=fs.readFileSync(pathname);
    //3、内存中的数据打成数据包传回浏览器
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);*/


    //  i am woody snake cereal nine cows hrsre pigs bulls milk cat