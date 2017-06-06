const fs = require('fs')

const file = 'webschooool.txt'
const data = '\nby André'

const callback = (err) => {
    if (err) throw err
    console.log('Adicionado conteúdo novo!')
}

// Async
fs.appendFile(file, data, callback)
// fs.appendFile(file, data, 'utf8', callback)

// Sync
// fs.appendFileSync(file, data, encoding, callback)

console.log('Final da Execução')