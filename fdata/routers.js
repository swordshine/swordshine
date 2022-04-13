var Controller=require("./controller.js");

exports.routers=function(req,res,pathname){
    //写路由
    switch(pathname){
        case "/index" :
            //console.log(123);
            //写控制器方法
            Controller.index(req,res);
            break;
        default :
            console.log(456);
            break;
    }
}

//MVC框架中  入口文件index.js 路由文件routers.js