class Usuario {
    constructor(name, age) {
        this.age = age 
        this.name = name

    }

    greet() {

        console.log(`Hola ${this.name}, bienvenido`)

    }
}

module.exports = Usuario