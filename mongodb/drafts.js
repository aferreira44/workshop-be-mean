// Installing

sudo apt - key adv-- keyserver hkp : //keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3" +
    ".4 multiverse" | sudo tee / etc / apt / sources.list.d / mongodb - org - 3.4.list

sudo apt - get update

sudo apt - get install - y mongodb - org

// Configure folder

sudo mkdir / data
sudo mkdir / data / db
sudo chmod 777 - Rf / data

// Up an run

mongodb // up the mongoDB

mongo // mongoDB client

mongo be - mean // mongoDB client

// Export

mongoexport-- db nome_do_database-- collection nome_da_colecao-- out minha_colecao.json

// Import

mongoimport-- db be - mean-- collection restaurantes-- drop-- file restaurantes.json

// Other commands

use be - mean

db
    .restaurantes
    .find()
    .count()

db

show dbs

show collections

db
    .teste
    .insert({nome: 'André', idade: 28})

db.createCollection() // cria uma collection vazia sem precisar inserir um document antes de efetivamente criar

// Create - db.insert()

var json = {
    escola: 'Webschool',
    active: true
}
db
    .teste
    .insert(json)

let pokemon = {
    'name': 'Pikachu',
    'description': 'Rato eletrico',
    'type': 'eletric',
    'attack': 100,
    height: 0.4
}
db
    .pokemons
    .insert(pokemon)

// db.save()

let pokemon = {
    'name': 'Caterpie' 'description': 'Larva lutadora',
    'type': 'inseto',
    'attack': 30,
    height: 0.3
}

db
    .pokemons
    .save(pokemon)

// Alterando um objeto e salvando

var query = {
    name: 'Caterpie'
}

var p = db
    .pokemons
    .findOne(query) // retorna como array

p.name

p.defense = 35

db
    .pokemons
    .save(p)

// Cursor

var cur = db
    .pokemons
    .find() // retorna como Cursor e não é possível utilizar o objeto novamente

while (cur.hasNext()) {
    print(tojson(cur.Next))
} // exibe conteúdo do cursor

// Retrieve - db.find() e db.findOne() _id é um identificador único UUID
// db.collection.find({clausulas}, {campos})

var query = {
    name: 'Pikachu'
}
var fields = {
    name: 1,
    description: 1,
    _id: 0
}

db
    .pokemons
    .find(query, fields)

// Operadores Aritméticos

$lt // less than
$lte // less than or equal

$gt // greater than
$gte // greater than or equal

var query = {
    height: {
        $lt: 0.5
    }
}

db
    .pokemons
    .find(query)

var query = {
    height: {
        $lte: 0.5
    }
}

db
    .pokemons
    .find(query)

var query = {
    height: {
        $gt: 0.5
    }
}

db
    .pokemons
    .find(query)

var query = {
    height: {
        $gte: 0.5
    }
}

db
    .pokemons
    .find(query)

// Operadores Lógicos

$or // ou

var query = {
    $or: [
        {
            a: 1
        }, {
            b: 2
        }
    ]
}

db
    .collection
    .find(query)

var query = {
    name: 'bob',
    $or: [
        {
            a: 1
        }, {
            b: 2
        }
    ]
}

$nor // negação de or

var query = {
    $nor: [
        {
            a: 1
        }, {
            b: 2
        }
    ]
}

db
    .collection
    .find(query)

$and // e

var query = {
    $and: [
        {
            a: 1
        }, {
            b: 2
        }
    ]
}

db
    .collection
    .find(query)

var query1 = {
    a: 1
}

var query2 = {
    b: 2
}

var query = {
    $and: [query1, query2]
}

db
    .collection
    .find(query)

// Operadores Existenciais

$exists // Retorna o objeto caso o campo exista

db
    .collection
    .find({
        campo: {
            $exists: true
        }
    })

// Exercícios

var query = {
    $and: [
        {
            attack: {
                $gte: 48
            }
        }, {
            height: {
                $lte: 0.5
            }
        }
    ]
}

// Update - db.update() Recebe 3 parâmetros: query, modificação e options Modo
// errado pois substitui todo o objeto pelo novo passado em mod

db
    .collection
    .update(query, mod, options)

var query = {
    name: /testemon/i
} // Regex onde 'i' é utilizado para não diferenciar maiúsculas de minúsculas

var query = {
    '_id': ObjectId('59467d3fd35eb1fa7ba40a69')
}

var mod = {
    description: 'Mudei aqui'
}

db
    .pokemons
    .update(query, mod)

// Operadores de Modificação $set - modifica um valor ou cria ele, caso não
// exista { $set: { campo: valor }}

var query = {
    name: /testemon/i
} // Regex onde 'i' é utilizado para não diferenciar maiúsculas de minúsculas

var query = {
    '_id': ObjectId('59467d3fd35eb1fa7ba40a69')
}

var mod = {
    $set: {
        name: 'Testemon',
        attack: 800,
        defense: 8000,
        height: 2.1,
        description: 'Pokemon de Teste'
    }
}

db
    .pokemons
    .update(query, mod)

// $unset - remove campos { $unset: { campo: valor }}

var query = {
    '_id': ObjectId('59467d3fd35eb1fa7ba40a69')
}

var mod = {
    $unset: {
        height: 1
    }
}

db
    .pokemons
    .update(query, mod)

// $inc - incrementa ou decrementa um valor,um cria o campo, caso ele não exista
// { $inc: { campo: valor }}

var query = {
    '_id': ObjectId('59467d3fd35eb1fa7ba40a69')
}

var mod = {
    $inc: {
        attack: 1
    }
}

db
    .pokemons
    .update(query, mod)

var mod = {
    $inc: {
        attack: -100
    }
}

db
    .pokemons
    .update(query, mod)

// Operadores de Array $push - adiciona um valor ao campo, caso seja um Array
// existente. Caso não exista, irá criar um campo novo com o valor passado no
// $push. Caso o campo exista e não seja um Array, retorna erro

var mod = {
    $push: {
        moves: 'choque do trovao'
    }
}

// $pushAll - adiciona cada valor do Array, caso o campo seja um array. Caso não
// exista, cria um campo novo do tipo Array com o o valor passado no $pushAll.
// Caso o campo exista e não seja um Array, retorna erro {$pushAll: {campo:
// [Array]}}

var attacks = ['investida', 'ataque rapido', 'bola eletrica']

var mod = {
    $pushAll: {
        moves: attacks
    }
}

// $pull - retira o valor do campo, caso o campo seja um Array. Caso não exista,
// ele não fará nada. Caso o campo exista e não seja um Array, retorna erro {
// $pull : {campo: valor}}

var mod = {
    $pull: {
        moves: "bola eletrica"
    }
}

// $pullAll - retira cada valor do Array, caso o campo seja um Array existente.
// Caso não exista, ele não fará nada. Caso o campo exista e não seja um Array,
// retorna erro {$pushAll: {campo: [Array]}}

var attacks = ['ataque rapido', 'investida']

var mod = {
    $pullAll: {
        moves: attacks
    }
}

// options

{
    upsert : boolean, // caso o documento não seja encontrado na query, ele insere o objeto que tá sendo passado como modificação
    multi : boolean, // permite alterar vários documentos em uma só query
    writeConcern : document
}

var query = {name: /PokemonInexistente/i}

var mod = {$set: {active: true}}

var options = {upsert: true}

db.pokemons.update(query, mod, options)

// $setOnInsert - inserir um documento adicional apenas se ocorrer um upsert, ou seja, se não for encontrado pela query

var query = {name: /NaoExisteMon/i}

var mod = {
    $set: {active: true},
    $setOnInsert: {
        name: 'NaoExisteMon',
        attack: null,
        defense: null,
        height: null,
        description: 'Sem informações'
    }
}

var options = {upsert: true}

db.pokemons.update(query, mod, options)

// options.multi - permite alterar vários documentos em uma só query

var query = {}

var mod = {$set: {active: false}}
var options = {multi: true}
db.pokemons.update(query, mod, options)

// Operadores de Array

// $in - retorna documentos que possuem algum dos calores passados no array de valores

// { campo : {$in : [arr_valores]}}

var query = {moves: {$in : [/investida/]}}
db.pokemons.find(query)

// $nin - retorna documentos que não possuem algum dos calores passados no array de valores

// { campo : {$in : [arr_valores]}}

var query = {moves: {$nin : [/investida/]}}
db.pokemons.find(query)

// $all - retorna documentos que todos os valores forem encontrados no array

// { campo : {$all : [arr_valores]}}

var query = {moves: {$all : ['investida', 'hidro bomba']}}
db.pokemons.find(query)

// Operadores de Negação

// $ne - not Equal

// {campo: {$ne : valor}}

var query = {type: {$ne : 'grama'}}

// Delete - remove()

// remove() - apaga documento
// drop() - apaga coleção

var query = {"_id" : ObjectId("594693e333ec76608e993f98")}
db.pokemons.remove(query)