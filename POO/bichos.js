class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}
class Gato extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca;
        this.cor = cor
    }
    miar(){
        console.log("miando...")
    }
}
class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca;
        this.cor = cor
    }
    latir(){
        console.log("latindo...")
    }
}

let bicho1 = new Animal("mamifero","medio",false,2020)
let frajola = new Gato("felino","sphynx","preto")
let snoopy = new Cachorro("canino","labrador","branco")
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.miar()
snoopy.latir()
snoopy.nascimento = 2021
console.log("A idade é "+snoopy.retornarIdade(2023))