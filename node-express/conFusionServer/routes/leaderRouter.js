const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of all leaders');
})

.post( (req , res , next) => {
	res.end('Will add leader: ' + req.body.name + 'with the discription: ' + req.body.description + ' .');
})

.put( (req , res , next) => {
	res.end('PUT operation not supported on /leaders');
})

.delete( (req , res , next) => {
	res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of the leader with id: ' + req.params.leaderId);
})

.post( (req , res , next) => {
	res.end('Will add leader: ' + req.body.name + 'with the discription: ' + req.body.description + 'with id: ' + req.params.leaderId);
})

.put( (req , res , next) => {
	res.end('updating leader with id: ' + req.params.leaderId);
})

.delete( (req , res , next) => {
	res.end('Deleting the leader with id: ' + req.params.leaderId);
});


module.exports = leaderRouter;