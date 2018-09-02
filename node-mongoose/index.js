const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/conFusion';
const Dishes = require('./Dishes');

const connect = mongoose.connect(url);

connect.then((db) => {

	console.log('Connected to database');

	Dishes.create({
		"name":"my dosa",
		"description":"test"
	})
	.then((dish)=> {
		console.log(dish);
		return Dishes.findByIdAndUpdate(dish._id , { 
           $set: {description:"updated test"} 
       },{
	        new:true
	     })
		.exec();
	})
	.then((dish) => {
		console.log(dish);

		dish.comments.push({
			rating:5,
			comment:'nice dish',
			author:'james'
		});

		return dish.save();
	})
	.then((dish) => {
		console.log(dish);

		return Dishes.remove();
	})
	.then(() => {

		return mongoose.connection.close();
	})
	.then((err) => {
		console.log(err);
	});
});