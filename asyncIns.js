const MongoClient = require('mongodb').MongoClient;
var async= require('async');

// Connection URL
const url='mongodb://localhost:27017';
const dbName = 'user';// Database Name



// Use connect method to connect to the server
MongoClient.connect(url, function(err,client){

	if(err){
			console.error("Error while connecting: " + err);
		}
	else{	
		console.log("connected successfully to server");
	}	

	const db=client.db(dbName);

	
    async.parallel({
        insertdocuments1: function(db,cb1){
            const collection=db.collection('documents');
			collection.insertMany([{a:6}], function(err,result){
				
				if(err){
					console.error(err);
				}
				console.log("Inserted a is 6 document into the collection");
				cb1(null,result);
			});
        },
        insertdocuments2: function(db,cb2){
            const collection=db.collection('documents');
			collection.insertMany([{a:7}], function(err,result){
				
				if(err){
					console.error(err);
				}
				console.log("Inserted a is 7 document into the collection");
				cb2(null,result);
			});
        },
    });
	client.close();
	
});