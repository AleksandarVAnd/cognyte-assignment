// Aleksandar Andonov - 15.06.22
const http = require('http');

const requestListener = function (req,res) {
	// # 2) have the service take its echo string from an environment variable
	if (req.method == 'POST') {
		var body = '';
		req.on('data', function(data){
			body += data
		});
		req.on('end', function() {
			res.writeHead(200)
			res.end(`This is written by ${body}`)
		});
	} else {
		res.writeHead(200);
	    res.end('Hey Cognyte!');	
	};
}

// whenever a request comes the server invokes the listener
const server = http.createServer(requestListener);
server.listen(8080);
console.log('Listening on port 8080...');