const MongoClient = require('mongodb').MongoClient;
var async= require('async');

// Connection URL
const url='mongodb://localhost:27017';
const dbName = 'user';// Database Name

var stack=[];
//declaring insert docs function
const insertDocumentsOne=function (db,callback){

	//get the documents cllection
	const collection=db.collection('documents');
	collection.insertMany([{a:6}], function(err,result){
		
		if(err){
			console.error(err);
		}
		console.log("Inserted 1 of 2 documents into the collection");
		callback(result);
	});
}

const insertDocumentsTwo=function (db,callback){

	//get the documents cllection
	const collection=db.collection('documents');
	collection.insertMany([{a:7}], function(err,result){
		
		if(err){
			console.error(err);
		}
		console.log("Inserted 2 of 2 documents into the collection");
		callback(result);
	});
}

stack.push(insertDocumentsOne);
stack.push(insertDocumentsTwo);


/*function getParallel(callback){
    var retObj = {};
    async.parallel({
        students: function(cb1){
            studentColl.find({},function(err,studentDocs){
                cb1(null, studentDocs)
            });
        },
        teachers: function(cb2){
            studentColl.find({},function(err,teacherDocs){
                cb2(null,teacherDocs)
            });
        }
    },
    function(err, results) {
        if(err) {
            retObj.status = false;
            retObj.message = 'Error';
            callback(retObj);
        } else {
            retObj.message = 'Success';
            retObj.output = results.students.concat(results.teachers);
            retObj.status = true;
            callback(retObj);
        }
    });
}*/
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
	/*insertDocuments(db,function(){
		client.close();
	});*/
	/*getParallel(function(result){
		res.json(result);
	})*/
	async.parallel(stack,function(err,result){   // hi sunil!! tried many ways but not getting how to go farword !
		console.log(result);
	});
	
});