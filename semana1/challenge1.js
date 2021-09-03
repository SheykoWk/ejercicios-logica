const reverseString = (str) => {
    //Implementación
    if(typeof str !== 'string') {
	    throw new Error("Tipo de dato o longitud no admitidos.")
    }
    if(str.split('').length > 15){
    	throw new Error("Tipo de dato o longitud no admitidos.")
    }
    if(str.split('').length <= 1){
	    throw new Error("Tipo de dato o longitud no admitidos.")
    }
    return str.split('').reverse().join('')
}
module.exports = {
    reverseString
}
