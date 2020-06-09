var http = require('http');
var fs = require('fs');
const url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    if(_url == '/'){
      _url = '/index.html';
    } else if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
    //response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);