function cityTaxes(name, population, treasury) {

    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            return (this.treasury +=  population * this.taxRate);
        },
        applyGrowth: function (num) {
            return this.population +=Math.floor(this.population*num/100)
        },
        applyRecession : function (num) {
            this.treasury-=Math.floor(this.treasury*num/100)

        }
    }
    return obj;
}
