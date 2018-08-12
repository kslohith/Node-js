const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use( (req , res , next) => {

	if( req.method == 'GET')
	{
		console.log(req.headers);
		res.statusCode = 200;
		res.setHeader('Content-Type' , 'text/html');
		res.end('<html><body><h1>This is a express server</h1></body></html>');
	}
	else
	{
		res.statusCode = 403;
		res.setHeader('Content-Type' , 'text/html');
		res.end('<html><body><h1>Access method not accepted.</h1></body></html>');
	}
});

const server = http.createServer(app);

server.listen(port , hostname , () => {
	console.log(`server running at ${hostname}:${port}/`);
});