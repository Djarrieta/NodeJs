function hola(nombre, callback){
    setTimeout(() => {
        console.log('hola '+nombre)
        callback()
    }, 1000);
}
function hablar(callback){
    setTimeout(() => {
        console.log('bla bla bla bla...')
        callback()
    }, 1000);
}
function adios(nombre, callback){
    setTimeout(() => {
        console.log('chao '+nombre)
        callback()
    }, 1000);
}


function conversacion(nombre,callback){
   hola(nombre,conversacion()) 
}

console.log('iniciar proceso')
conversacion('dario',)
console.log('terminar proceso')