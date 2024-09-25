class Vehicle {
    constructor(brand, model) {
        this.brand = brand
        this.model = model

    }

    getDetails() {

        console.log(`La marca de vehiculo es ${this.brand}, y el modelo es ${this.model}`)

    }
}

module.exports = Vehicle