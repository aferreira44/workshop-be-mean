// ES5
// function onPower(exp) {
//     return function(number) {
//         return Math.pow(number, exp)
//     }
// }

// ES6
// One Line
//const onPower = exp => number => Math.pow(number, pow)

// Multiple Lines
const onPower = exp => number => {
    return Math.pow(number, exp)
}

const square = onPower(2)
console.log(square(5)) // 25