
// Installing

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update

sudo apt-get install -y mongodb-org

// Configure folder

sudo mkdir /data
sudo mkdir /data/db
sudo chmod 777 -Rf /data

// Up an run

mongodb // up the mongoDB

mongo // mongoDB client

mongo be-mean // mongoDB client

// Export

mongoexport --db nome_do_database --collection nome_da_colecao --out minha_colecao.json

// Import

mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json


// Other commands

use be-mean

db.restaurantes.find().count()

db

show dbs

show collections

db.teste.insert({nome: 'André', idade: 28})

db.createCollection() // cria uma collection vazia sem precisar inserir um document antes de efetivamente criar

// Create - db.insert()

var json = {escola: 'Webschool', active: true}
db.teste.insert(json)

let pokemon = {'name' : 'Pikachu', 'description':'Rato eletrico', 'type':'eletric', 'attack': 100, height: 0.4}
db.pokemons.insert(pokemon)

// db.save()

let pokemon = {'name' : 'Caterpie' 'description':'Larva lutadora', 'type':'inseto', 'attack': 30, height: 0.3}

db.pokemons.save(pokemon)

// Alterando um objeto e salvando

var query = {name: 'Caterpie'}

var p = db.pokemons.findOne(query) // retorna como array

p.name

p.defense = 35

db.pokemons.save(p)

// Cursor

var cur = db.pokemons.find() // retorna como Cursor e não é possível utilizar o objeto novamente

while(cur.hasNext()){print(tojson(cur.Next))} // exibe conteúdo do cursor









