//CLASE 4: PROMESAS

//EJERCICIO 1:
function cocinarFideos(tiempoDeCoccion){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fideos listos en: ${tiempoDeCoccion} minutos`);
        }, tiempoDeCoccion*1000);
    });
}

cocinarFideos(1)
.then(resultado => {
    console.log(resultado);
    console.log("**************************");
})
.catch((error)=>{
    console.error('Error: ', error);
})



//EJERCICIO 2:
async function cocinarFideos(tiempoDeCoccion){
    const terminado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fideos listos en: ${tiempoDeCoccion} minutos`);
        }, tiempoDeCoccion*1000);
    });

    console.log(terminado);
    console.log("**************************");
}

cocinarFideos(4);



//EJERCICIO 3:

