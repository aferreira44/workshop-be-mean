const version = 7

version = 20
console.log("Versão: " + version)

const version = 20;

var version = 20; // undefined
console.log("Versão: " + version) // 7

const user = {
    name: 'André'
}

user = {
    name: 'Paulo'
}
console.log(user) // André

user.name = 'Caio'
console.log(user) // Caio

function pimba() {
    const naGorduchinha = true
    console.log(naGorduchinha) // true
}

pimba()

const naGorduchinha = false
console.log(naGorduchinha) // false