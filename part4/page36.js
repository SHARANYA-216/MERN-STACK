// Go to cmd
//services - to check whether the mongoDB server is running
//Ign command prompt type mongosh to connect to mongosh server
//show dbs
//use mru26a
//show collections
//db.createCollection("products")
//db.products.drop()
//db.products.renameCollection("prod")


//insert document in products collections
db.products.insertOne({
        name : "sofa",
        price : 20000
})

//To view document
db.products.find()

//To insert Many
db.products.insertMany([
    {
        name : "chair",
        price : 5000
    },
    {
        name : "table",
        price : 10000
    }
])

//db.products.find()- all documents will come
//db.product.findOne() - only one document as object

//find with condition
db.products.find({price : 5000}) // it will return all the documents with price 5000

//show or hide fields
db.products.find({},{_id:0}) //except _id all

// db.products.find({},{name:1})
db.products.find({},{_id:0,name:1}) //only name fields will appear
db.products.find({name: "chair"},{_id:0,name:1})

//updating document
db.products.updateOne({
    name: "table"
}, 
{
    $set:{price:15000}
});

//update multiple documents
db.products.updateMany({
    name: "table"
}, 
{
    $set:{price:15000}
});

//deleting one Document
db.products.deleteOne({name: "chair"}) //deletes only one chair

//deleting one Document
db.products.deleteMany({name: "table"}) //deletes 2 tables




