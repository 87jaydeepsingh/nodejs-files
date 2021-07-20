const mongodb = require('mongodb');
let uri = 'mongodb://jaydeepsingh:87jaydeep@ds123635.mlab.com:23635/moncon_db';
mongodb.MongoClient.connect(uri,{ useNewUrlParser: true }, function(err, client) {
  if(err) throw err;
  let db = client.db('moncon_db')
  db.collection("customers").find({}).toArray(function(err,result) {
    if (err) throw err;
    console.log(result);
});
});
