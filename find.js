const MongoClient=require('mongodb').MongoClient;

//connection url
const url='mongodb://localhost:27017';
const dbName='user';

//declaring find docs function
const findDocuments=function(db,callback){

	//get the documents collection
	const collection=db.collection('documents');
	collection.find({'a':3}).toArray(function (err,docs){
		if(err){
			console.error(err);
		}
		console.log("Found the following records");
		console.log(docs);
		callback(docs);
	});
}

//use connect method to connect to the server
MongoClient.connect(url,function(err,client){
	console.log("connected successfully to server");

	const db=client.db(dbName);
	findDocuments(db,function(){
		client.close();
	});
});