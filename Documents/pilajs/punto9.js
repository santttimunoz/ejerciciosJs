//manejo de callbacks
function crearPadawan(name, age, planet, heigth, clasificarPadawan){
    setTimeout(function(){
        let padawan = {
        nombre: name,
        edad: age,
        planeta: planet,
        estatura: heigth
    }
    clasificarPadawan(padawan)
    },2000)    
}

crearPadawan("jeiden", 23, "pluton", 1.45, function(padawan){       
    if(padawan.edad < 15){
        console.log("puedes manejas la fuerza")
    }else{
        console.log("puedes manejar la fuerza y el sable")
    }
})

