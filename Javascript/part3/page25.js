const stock = {
    name : "wipro",
    lastprice : 200,
    currprice : 250,
    //using function
    growth : function() {
        return this.currprice - this.lastprice;
    },
    growthpercent : function() {
        return this.growth() / this.lastprice * 100;
    },
};
console.log(stock.growth())
console.log(stock.growthpercent())

