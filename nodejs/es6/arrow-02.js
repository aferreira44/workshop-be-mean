normal() // YES
arrow() // ReferenceError: arrow is not defined

function normal() { console.log("NORMAL")}
const arrow = () => {console.log("ARROW")}

let a = () => {} // undefined
let b = () => ({}) // retorno de objeto vazio

