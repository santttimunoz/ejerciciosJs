//callback tradicional

//funcionSecundaria es el nombre del callback
function funcionPrincipal(user, pass, funcionSecundaria){
    let estadoValidacion
    setTimeout(function(){
        //logica que implementa la funcionPrincipal
        //validar usuario y contraseña en bd
        if(user == "admin" && pass == "admin"){
            estadoValidacion = true
            //el callback siempre se llama dentro de la funcion principal
            funcionSecundaria(estadoValidacion)
        }else{
            //el callback siempre se llama dentro de la funcion principal
            estadoValidacion = false
            funcionSecundaria(estadoValidacion)
        }
    },2000)
}

user = "admin"
pass = "adminn"
funcionPrincipal("admin", "admin", function(estadoValidacion){
    if(estadoValidacion){
        console.log("bienvenido")
    }else{
        console.log("mira esta perro .|.")
    }
})