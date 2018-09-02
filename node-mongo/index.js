const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017/conFusion';
const dbname = 'conFusion';

MongoClient.connect(url , (err , client) => {
	assert.equal(err , null);

	console.log('correctly connected to database');

	const db = client.db(dbname);
	dboper.insertDocument(db , { 'name':'my_food' , 'description':'my_description' , 'name':'my_food1' , 'description':'my_description1'}   , "dishes" , (result) => {
		console.log("Inserted Documents" + result.ops);

		dboper.findDocument(db , "dishes" , (docs) => {
			console.log("Documents found\n" , docs );

			dboper.updateDocument(db , {'name':'my_food1'} , {'description':'Masala_dosa'} , 'dishes' , (result) => {
				console.log('Updated document\n' , result.result );

				 dboper.findDocument(db , "dishes" , (docs) => {
			        console.log("Documents found\n" , docs );
			  
		client.close(); 
		});
	});                	
});
});	
});