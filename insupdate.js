const MongoClient= require('mongodb').MongoClient;

const url='mongodb://localhost:27017';
const dbName='user';

//declaring insert docs function
const insertDocuments=function (db,callback){

	//get the documents cllection
	const collection=db.collection('documents');
	collection.insertMany([{a:4},{a:5}], function(err,result){
		
		if(err){
			console.error(err);
		}
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
}

const updateDocuments=function(db,callback){

	const collection=db.collection('documents');
	collection.updateOne({a:5},{$set:{b:5}},function(err,result)
	{
		
		if(err){
			console.error(err);
		}
		console.log("Updated the document with field a is 5");
		callback(result);
	});
}

MongoClient.connect(url,function(err,client){
	if(err){
		console.error("Error while connecting: "+err);
	}
	else{
		console.error("Connected Successfully to server: "+ client);		
	}

	const db=client.db(dbName);

	insertDocuments(db,function(){
		updateDocuments(db,function(){
			client.close();
		});
	});
});