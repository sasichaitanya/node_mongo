const MongoClient=require('mongodb').MongoClient;

//connection url
const url='mongodb://localhost:27017';
const dbName='user';

//declaring find docs function
const updateDocuments=function(db,callback){

	const collection=db.collection('documents');
	collection.updateOne({a:2},{$set:{b:1}},function(err,result)
	{
		
		if(err){
			console.error(err);
		}
		console.log("Updated the document with field 2");
		callback(result);
	});
} 




MongoClient.connect(url,function(err,client){
	console.log("connected successfully to server");

	const db=client.db(dbName);
	updateDocuments(db,function(){
		client.close();
	});
});