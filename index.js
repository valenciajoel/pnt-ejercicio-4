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

function buscarUsuario(id){
    if(id < 0 || id >= usuarios.length){
        throw new Error ('El id es invalido');
    }else{
        return usuarios[id];
    }
}

const tiempo = 1500;

//EJERCICIO 3:
let usuarios = [{nombre:"Pedro",publicaciones:["Hola soy Pedro","Trabajo en Google","Me gustan los perros"]},
{nombre:"Pablo",publicaciones:["Hola soy Pablo","Trabajo en Azure","Me gustan los gatos"]}
,{nombre:"Gustavo",publicaciones:["Hola soy Gustavo","Trabajo en Globant","Me gustan los perros"]}];
async function obtenerUsuario(id){
    const usuario = await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(buscarUsuario(id).nombre);
        }, tiempo);
    });
    return usuario;
}

async function obtenerPublicaciones(idUsuario){
    const publi = await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(buscarUsuario(idUsuario).publicaciones);
        }, tiempo);
    });
    return publi;
}

async function obtenerInfoCompletaUsuario(idUsuario) {
    try {
    const usuario =await obtenerUsuario(idUsuario);
    const publicaciones = await obtenerPublicaciones(idUsuario);
    console.log(`Nombre de usuario: ${usuario}`);
    console.log(`Publicaciones del usuario: ${publicaciones. join(', ')}`);
    } catch (error) {
    console.error('Error:', error);
    }
    }
    obtenerInfoCompletaUsuario(1);
    
//EJERCICIO 4

const usuarioPrincipal = 2;

Promise.all([
    obtenerUsuario(usuarioPrincipal),
    obtenerPublicaciones(usuarioPrincipal),
])
.then((resultados) => {
    console.log("Ejercicio 4");
    resultados.forEach(resultado => console.log(resultado));
})

