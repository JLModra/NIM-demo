var http = require("http"),
	url = require("url"),
	fs = require("fs");
http.createServer(function(req,res){
	console.log(pathname);
	// var dirname  = __dirname;
	var pathname = url.parse(req.url).pathname;
	console.log(pathname);
  	fs.readFile("."+pathname, function readData(err, data) {
        res.writeHead(200);
        res.end(data);
    });
}).listen(80, "106.2.36.127");
console.log('Server running at http://106.2.36.127:80/');
