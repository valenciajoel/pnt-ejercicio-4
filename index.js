//CLASE 4: PROMESAS

//EJERCICIO 1:
function cocinarFideos(tiempoDeCoccion){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fideos listos en ${tiempoDeCoccion} minutos')
        }, tiempoDeCoccion*1000);
    })
}

cocinarFideos(8).then((result) => {
    console.log(result);
})
.catch((error)=>{
    console.error('Error: ', error);
})

console.log("**************************");

//EJERCICIO 2:
