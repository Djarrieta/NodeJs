const fs=require('fs');

//Leer archivos
function leer(ruta,callback){
    fs.readFile(ruta,(err,data)=>{
        callback(data.toString())
    })
}
//leer(__dirname + '/archivo.txt',console.log) //

//escribir
function escribir(ruta, contenido, callback){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error('hay un error de escritura', err)
        }else{
            console.log('se ha escrito correctamente')
        }
    })
}
escribir(__dirname + '/archivo1.txt','soy un archivo nuevo',console.log)