var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27000/", function(err, db) {
  console.log("err: " + err)
  console.log("db:  " + db)
  var adminDB = db.admin();
  adminDB.serverStatus(function(err, status){
    console.log(status);
    db.close();
  });
});