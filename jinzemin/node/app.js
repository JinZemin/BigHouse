/**
 * Created by jinzemin on 2017/1/1.
 */
var http=require('http');
http.createServer(function(red,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<head><meta charset="UTF-8"/></head>');
    res.end('您好！\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')