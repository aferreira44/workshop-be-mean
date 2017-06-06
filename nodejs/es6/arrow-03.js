// ES5

const a = (function (x) {
    return x
})(10)

console.log(a)

// ES6

const b = ((x) => {
    return x
})(10)

console.log(b);