const reverseInt = (number) => {
    //Implementación
    let inv = 0; //
    let rest = Math.abs(number); // 13940
    if(Math.sign(number) === 1){
        do{
            inv = inv * 10 + (rest % 10);
            rest = Math.floor(rest / 10)
        } while (rest > 0)
        return inv
    } else if(Math.sign(number) === -1){
        do{
            inv = inv * 10 + (rest % 10);
            rest = Math.floor(rest / 10)
        } while (rest > 0)
        return inv * -1
    }
    throw new Error("El valor que ingresaste no es un numero")
}
console.log(reverseInt(-13940))
module.exports = {
    reverseInt
}