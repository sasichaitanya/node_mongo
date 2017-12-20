const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url='mongodb://localhost:27017';
const dbName = 'user';// Database Name

//declaring insert docs function
const insertDocuments=function (db,callback){

	//get the documents cllection
	const collection=db.collection('documents');
	collection.insertMany([{a:1},{a:2},{a:3},{a:4}], function(err,result){
		
		if(err){
			console.error(err);
		}
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err,client){

	if(err){
			console.error("Error while connecting: " + err);
		}
	else{	
		console.log("connected successfully to server");
	}	

	const db=client.db(dbName);

	//calling insertdocuments function
	insertDocuments(db,function(){
		client.close();
	});
	
});