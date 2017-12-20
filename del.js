const MongoClient=require('mongodb').MongoClient;

//connection url
const url='mongodb://localhost:27017';
const dbName='user';

//declaring find docs function
const deleteDocuments=function(db,callback){

	const collection=db.collection('documents');
	collection.deleteOne({a:3},function(err,result)
	{
		if(err){
			console.error(err);
		}

		console.log("Removed the document with field 3");
		callback(result);
	});
} 




MongoClient.connect(url,function(err,client){
	
	console.log("connected successfully to server");

	const db=client.db(dbName);
	deleteDocuments(db,function(){
		client.close();
	});
});