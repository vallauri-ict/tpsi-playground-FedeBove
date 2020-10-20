var url = require('url');
var parseHostName = function(input){
    var parsed = parse(input);
    return (parsed != null) ? parsed.hostname : null;
}

var parseProtocol = function(input){
    var parsed = parse(input);
    return (parsed != null) ? parsed.protocol : null;
}

var parse = function(input){
    return url.parse(input);
}

exports.getHostName = parseHostName;
exports.getProtocol = parseProtocol;