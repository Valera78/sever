var http = require("http");



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://User:<User1>@users-x07hv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices").insertOne({'HY SHO':"Sobaci"});
  console.log('я отправил нахуй');
  client.close();
});

 
http.createServer(function(request, response){
    response.status = 200;
    response.setHeader('Content-type','text/html;charset=utf-8;');

    response.end('сервер стартанул');
}).listen(3000);