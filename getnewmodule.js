//模块的单次加载
var hello1=require("./module.js");
hello1.setName("shine");
var hello2=require("./module.js");
hello2.setName("shine2");

hello1.getName();


//nodejs的require是单次加载的 require指向的就是同一个module.exports的首地址指针
