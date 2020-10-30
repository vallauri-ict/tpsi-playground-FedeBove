let HTTPDispatcher = function(){
    this.leadingName = ' Dispatcher >> ';
    this.list = {get:[], post:[]};
    this.addListener = function(method, url, cb){
        this.list[method].push({'cb':cb, 'url':url});
    };
};
HTTPDispatcher.prototype.showlist = function(){
    console.log(this.leadingName + 'Registered listeners: n');
    for(method in this.list){
        console.log(method + ' --> ' + this.list[method].length + ' listeners');
        for(listener of this.list[method]){
            console.log('url: ' + listener.url + ' cb:' + listener.cb);
        }
    }
};
HTTPDispatcher.prototype.dispatch = function(req, res){
    let parseURL = require('url').parse(req.url, true).pathname;
    let method = req.method.toLowerCase();
    for (listener of this.list[method]){
        if(listener.url === parseURL){
            listener.cb(req, res);
        }
    }
};
module.exports = new HTTPDispatcher();