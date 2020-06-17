async function hola(nombre){
    let n=Math.random()*1000
    setTimeout(() => {
        console.log('hola '+nombre)
    }, n);
}
async function hablar(y){
    let n=Math.random()*1000
    setTimeout(() => {
        console.log(y+'bla bla bla bla...')
    }, n);
}
async function adios(nombre){
    let n=Math.random()*1000
    setTimeout(() => {
        console.log('chao '+nombre)
    }, n);
}
async function main(){
    console.log('arranca proceso')
    await hola('dario')
    for (let i=1;i<3;i++){
        await hablar(i)
    }
    await adios('dario')
}
main()