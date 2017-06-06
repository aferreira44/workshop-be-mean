const fs = require('fs')

const file = 'webschool.txt'
const data = 'Webschool é nóis!'

const callback = (err) => {
    if (err) throw err
    console.log('Salvei async!!');
}

// Async
fs.writeFile(file, data, callback)
// fs.writeFile(file, data, 'utf8', callback)

// Sync
fs.writeFileSync(file, data)
console.log('Salvei sync')
console.log('Final da execução')