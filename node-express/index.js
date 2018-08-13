const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/dishes' , (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} );

app.get('/dishes' , (req , res , next) => {
	res.end('Will get the information of all dishes');
});

app.post('/dishes' , (req , res , next) => {
	res.end('Will add dish: ' + req.body.name + 'with the discription: ' + req.body.description + ' .');
});

app.put('/dishes' , (req , res , next) => {
	res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes' , (req , res , next) => {
	res.end('Deleting all dishes');
});

app.get('/dishes/:dishId' , (req , res , next) => {
	res.end('Will get the information of the dish: ' + req.params.dishId + ' .');
});

app.post('/dishes/:dishId' , (req , res , next) => {
	res.end('Will add dish: ' + req.body.name + ' with the discription: ' + req.body.description + ' with dish id: ' + req.params/dishId + ' .');
});

app.put('/dishes/:dishId' , (req , res , next) => {
	res.end('updating dish with id: ' + req.params.dishId + ' name: ' + req.body.name + ' discription: ' + req.body.description + ' .');
});

app.delete('/dishes/:dishId' , (req , res , next) => {
	res.end('Deleting dish with id: ' + req.params.dishId + ' name: ' + req.body.name + ' discription: ' + req.body.description + ' .');
});


app.use( (req , res , next) => {

	if( req.method == 'GET')
	{
		console.log(req.headers);
		res.statusCode = 200;
		res.setHeader('Content-Type' , 'text/plain');
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