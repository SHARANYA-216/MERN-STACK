//spread operator
//using const
/* const items = {
    name : "product 1",
    price : 50,
    quantity : 4,
};
console.log(items)
items.rating = 4
// console.log(items) // manually withoiut using spread operator

// using spread operator for adding items in items

const item = {...items, rating : 4}
console.log(item) */

//using let- especially for reassigning, let for both
//const won't work for reassaining but spread operator works well on const var also for adding items

let items = {
    name : "product 1",
    price : 50,
    quantity : 4,
};
console.log(items)
items.rating = 4
// console.log(items) // manually withoiut using spread operator

// using spread operator for adding items in items

const item = {...items, rating : 4}
console.log(item)