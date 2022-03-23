var Controller=require("./controller.js");



exports.router=function(pathname,req,res){
    switch(pathname){
        case '/':
            Controller.resIndex(res);
            break;
        case '/parse':
            Controller.resAdd(req,res);
            break;
        case '/img':
            //console.log(Controller);
            Controller.resImg(res);
            break;
        default:
            Controller.resdefault(res);
            break;
    }
}