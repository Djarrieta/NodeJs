function saludo(nombre,callback){
    setTimeout(() => {
        console.log('mi nombre es '+nombre)
        callback()
    }, 1000);
}

console.log('hola')
saludo('dario', ()=>{console.log('adios')})

