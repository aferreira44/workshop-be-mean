require('./config')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Criação do Schema
const _schema = {
    pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const pokemonSchema = new Schema(_schema)

const data = {
    pokemons: ['5937494a9d983abb76401ca4']
}

const Model = mongoose.model('pokemons', pokemonSchema)
const poke = new Model(data)

poke.save((err, data) => {
    if (err) 
        return console.log('ERRO: ', err)
    console.log('Inseriu: ', data);
})

module.exports = pokemonSchema