//处理DNS --专属包  专属类库 专属模块
var dns=require("dns");
dns.resolve4("www.baidu.com",function(err,addresses){
    if(err){
        console.log(err);
    }else{
        //console.log(typeof(addresses));
        //console.log(addresses.length);

        addresses.forEach((a) => {
            dns.reverse(a, (err, hostnames) => {
              if (err) {
                throw err;
              }
              console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
            });
        });
        /*
        for(var i=0;i<addresses.length;i++){
            dns.reverse(addresses[i],function(err,hostnames){
                if(err){
                    //console.log(addresses[i]);
                    console.log('hostname is '+err);
                }else{
                    console.log(hostnames);
                }
            })
        }*/
    }

})
