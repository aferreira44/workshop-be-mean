const fs = require('fs')
const os = require('os')

const file = process.argv[2] || 'webschool.txt'
let data = process.argv[3] || '\nby André'

const callback = (err) => {
    if (err) throw err
    console.log('Adicionado conteúdo novo!')
}

data = os.EOL + data

// Async
fs.appendFile(file, data, callback)
// fs.appendFile(file, data, 'utf8', callback)

// Sync
// fs.appendFileSync(file, data, encoding, callback)

console.log('Final da Execução')