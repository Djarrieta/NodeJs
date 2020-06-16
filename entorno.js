let nombre=process.env.NOMBRE || 'SinNombre';
let web=process.env.WEB || 'SinWeb'
console.log('hola '+nombre+', mi web es '+ web)
//desde la terminal se escribe==== NOMBRE=dario node entorno.js 
//si queremos un nombre por defecto usamos || 'SinNombre'
//Para pasar varias variables se separan con espacios NOMBRE=dario WEB=dja.red node entorno.js

//npm install -g nodemon    Instala una aplicacion que detecta cambios y corre la ultima version del archivo. Se corre esta linea en la consola, en mi caso en git bash


//npm install -g pm2 Intala otra aplicacion llamada pms pero mas poderosa que sirve para produccion.