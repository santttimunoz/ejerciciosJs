const numbers = Array.from({ length: 10 }, function(nombre, edad){
    let persona = {
        nombre,
        edad
    }
    return persona
})
console.log(numbers)