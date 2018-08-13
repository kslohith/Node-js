const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of all dishes');
})

.post( (req , res , next) => {
	res.end('Will add dish: ' + req.body.name + 'with the discription: ' + req.body.description + ' .');
})

.put( (req , res , next) => {
	res.end('PUT operation not supported on /dishes');
})

.delete( (req , res , next) => {
	res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of the dish with id: ' + req.params.dishId);
})

.post( (req , res , next) => {
	res.end('Will add dish: ' + req.body.name + 'with the discription: ' + req.body.description + 'with id: ' + req.params.dishId);
})

.put( (req , res , next) => {
	res.end('updating dish with id: ' + req.params.dishId);
})

.delete( (req , res , next) => {
	res.end('Deleting the dish with id: ' + req.params.dishId);
});


module.exports = dishRouter;