const capitalizeLetters = (str) => {
    //Implementación
    return str.replace(/\b\w/g, l => l.toUpperCase())
}
console.log(capitalizeLetters("welcome to academlo"))
module.exports = {
    capitalizeLetters
}