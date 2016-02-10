var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27000/", function(err, db) {
  var newDB = db.db("newDB");
  newDB.createCollection("newCollection", function(err, collection){
    collection.stats(function(err, stats){
      console.log(stats);
      db.close();
    });
  });
});