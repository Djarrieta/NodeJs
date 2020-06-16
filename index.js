/* var i=0
setInterval(() => {
    i++
    console.log(i)
}, 1000); */

function f2(callback){
    callback()
    console.log("2")
}

function f1(){
    setTimeout(() => {
        console.log('1')
    }, 500);
}

f2(f1)

