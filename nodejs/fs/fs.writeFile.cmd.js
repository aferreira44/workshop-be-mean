const fs = require('fs')

// Executar no terminal> node fs.writeFile.cmd.js 'arquivo-novo.txt' 'Gravando via comando'
const file = process.argv[2] || 'webschool.txt'
const data = process.argv[3] || 'Webschool é nóis!'

const callback = (err) => {
    if (err) throw err
    console.log('Salvei async!!');
}

// Async
fs.writeFile(file, data, callback)
// fs.writeFile(file, data, 'utf8', callback)

console.log('Final da execução')