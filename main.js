function Veiculo(acelerar, freiar, rodas) {
    this.acelerar = acelerar
    this.freiar = freiar
    var _acelerar = acelerar
    var _freiar = freiar
    this.rodas = rodas
}

function Carro(modelo, marca, ano) {
    Veiculo.call(this, 'Sim', 'Sim', '4')
    this.modelo = modelo
    this.marca = marca
    this.ano = ano
}

function Moto(modelo, marca, ano) {
    Veiculo.call(this, 'Sim', 'Sim', '2')
    this.modelo = modelo
    this.marca = marca
    this.ano = ano
}

const carro = new Carro('Ka', 'Ford', 2022)
const moto = new Moto('Twister', 'Honda', 2020)
console.log(carro)
console.log(moto)