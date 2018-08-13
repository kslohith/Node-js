const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of all promotions');
})

.post( (req , res , next) => {
	res.end('Will add promo: ' + req.body.name + 'with the discription: ' + req.body.description + ' .');
})

.put( (req , res , next) => {
	res.end('PUT operation not supported on /promotions');
})

.delete( (req , res , next) => {
	res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all( (req , res , next) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type' , 'text/txt');
	  next();
} )

.get( (req , res , next) => {
	res.end('Will get the information of the promo with id: ' + req.params.promoId);
})

.post( (req , res , next) => {
	res.end('Will add promo: ' + req.body.name + 'with the discription: ' + req.body.description + 'with id: ' + req.params.promoId);
})

.put( (req , res , next) => {
	res.end('updating promo with id: ' + req.params.promoId);
})

.delete( (req , res , next) => {
	res.end('Deleting the promo with id: ' + req.params.promoId);
});


module.exports = promoRouter;