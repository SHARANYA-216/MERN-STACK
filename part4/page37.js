//insert many
db.products.insertMany([
    {
        name : "prod 1",
        price : 100
    },
    {
        name : "prod 2",
        price : 150
    },
    {
        name : "prod 3",
        price : 200
    },
    {
        name : "prod 4",
        price : 250
    },
    {
        name : "prod 5",
        price : 300
    },
    
])

//lt,gt/lte,gte,eq,ne
db.products.aggregate([
    { $match: { price: {$gt: 100}}}, //PIPELINES
    { $project: {_id:0,name: 1, price: 1}},  
    { $sort: { price: 1}},
    { $sort: { price: -1}},
    { $limit: 2 },
    { $skip: 1 },
]);

//Schema-less Architecture

db.products.updateOne(
    { name: "prod 1" },
    { $set: { category: "Category A"}}
);
db.products.updateOne(
    { name: "prod 3" },
    { $set: { category: "Category B"}}
);

db.products.aggregate(
    { $group: { _id: "$category", total: { $sum: "$price" } }}
);