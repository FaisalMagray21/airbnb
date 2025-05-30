const mongdb=require("mongodb");
const mongoClient=mongdb.MongoClient;
const password="root";
const url=`mongodb+srv://root:${password}@airbnb.hl2l1v8.mongodb.net/?retryWrites=true&w=majority&appName=airbnb`;
let _db;
const mongoConnect=(callback)=>{

    mongoClient.connect(url).then((client)=>{
        console.log("Mongodbconnected successfully");
        //console.log(client);
        _db=client.db("airbnb");
        callback()

    }).catch((err)=>{
        console.log("Error catch while mongodb connect");
        
        console.log(err);
        
    })

}
const getDb=()=>{
    if(!_db){
        throw new Error("database is not connected");
    }
return _db;
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;