import {nombreTarea as T,CrearTarea,Tarea } from './tareas.js';
console.log(T)
const tareaExport1 = CrearTarea('pasear al perro','Alta');
console.log('Tarea exportada',tareaExport1)

const tareaExport = new Tarea('Tarea Exportada','Alta');
console.log('Class Tarea Exrpot',tareaExport);
const Numeros = [1,2,3];
const Banda ="Metalica";
const genero= "Heavy Metal";
const Canciones = ['Canción # 1',"Canción #2"    ];
const carrito = ['Product 1 ', 'Product 2', 'Product 3']
const metalica = 
{
    Banda: Banda,
    genero : genero
}

const Persona = {
    nombre :' Juan',
    trabajo : 'Dev',
    edad : 24,
    mostrarInformacion() {
        console.log(`Hola : ${this.nombre}`)
    }
}

const Personas = [
    {nombre:'Henry', edad:24,aprendiendo: 'Javascript'},
    {nombre:'Pablo', edad:34,aprendiendo: 'Php'},
    {nombre:'José', edad:24,aprendiendo: 'Python'},
    {nombre:'Daniel', edad:16,aprendiendo: 'React'}
]

/// FUnctiones a Object

console.log(metalica)

// Object Literal Enhacement
const metalic = {Banda,genero,Canciones};
console.log(metalic)



Persona.mostrarInformacion();



console.log(carrito)

const appContenedor = document.querySelector('#root');
let html ='';
carrito.forEach((product) => {
    html+= `<li>${product}</li>`;
});

appContenedor.innerHTML = html;


carrito.map(product  => {
    return `El product es : ${product}`
})

//Object Key

console.log('Object Key',Object.keys(Persona))



//Spread Operator
let unionInformation  = {...Canciones,...Persona}
console.log('Spread Operator',unionInformation)


let reverseUnion = [...Canciones].reverse();
console.log('reverse',reverseUnion);
console.log('reverse',Canciones);

function suma(a,b,c){
    console.log('Suma',a+b+c)
}

suma(...Numeros)


//Métodos en arreglos
//.Filter

const mayores=Personas.filter((persona)=>{
    return persona.edad >28;
});
console.log('Mayores',mayores)

//Qué aprende alejandra? 

const aprendiendoHenry = Personas.find((persona) =>{
    return persona.nombre === 'Henry'
})
console.log('Find',aprendiendoHenry)


//Reduce
//La coma significa el valor unicial
let total = Personas.reduce((edadTotal,persona) =>{
    return edadTotal + persona.edad
},0)
console.log('reduce',total)


//Promesas llamar API
const descargarUsuarios = cantidad => new Promise ((resolve,reject ) => {
        //pasar canticdad al api
        const api =`https://randomuser.me/api/?results=${cantidad}&nat=us`;
        const xhr = new XMLHttpRequest ();
        //abrir la conexión
        //Método, url, si es async o no
        xhr.open('GET',api,true);

        //on Load
        xhr.onload = () => {
            if(xhr.status ===200){
                resolve(JSON.parse(xhr.responseText).results)
            }else{
                reject(Error(xhr.statusText))
            }
        }
        //Opción On error
        xhr.onerror= (error) => reject(error);
        //send
        xhr.send();


});
descargarUsuarios(20).then(
    miembros=> imprimirHtml(miembros),
    error => console.error(
        new Error('Hubop un error'+error)
    )

)

function imprimirHtml(users){
    let html = '';
    users.forEach ( user =>{
        html += `

        <li>${user.name.first} ${user.name.last}
        Pais: ${user.nat}
        Imagen : <img src ="${user.picture.medium}">

        </li>
        `;
    })
    const contenedorApp= document.querySelector("#root");
    contenedorApp.innerHTML= html;
}


