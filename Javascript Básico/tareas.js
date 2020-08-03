//Exporta una constante
export const nombreTarea = 'PaserPerro';
//Clases en javascript y Export 
export const CrearTarea = (tarea,urgencia) => {
    return `La tarea: ${tarea} tiene una urgencia ${urgencia} `;
}

export class Tarea {
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad= prioridad;

    }
    mostar(){
        return (`${this.nombre} tiene una prioridad de ${this.prioridad}`)
    }
}
//Herencia
class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad,cantidad){
        super(nombre,prioridad);
        this.nombre= nombre;
        this.prioridad= prioridad;
        this.cantidad= cantidad

    }
    //El override se hace con solo poner la clase de la herencia.
    //Se puede llamar un método del extendido con super;
    mostar(){
        super.mostar();
        return `y la cantidad de ${this.cantidad}`
    }
}
//Crear Objectos
let tarea1 = new Tarea('Aprendiendo Javascript','Alta');
let tarea2 = new Tarea('Aprendiendo Pythin','Alta');
let tarea3 = new Tarea('Aprendiendo Inglés','Super Alta');



let compra1 = new ComprasPendientes('Jabon','Alta',3);
let compra2 = new ComprasPendientes('Café','Alta',4);
let compra3 = new ComprasPendientes('PC','Super Alta',1);

console.log('Compras Pendiente',compra1.mostar());
console.log('Tarea',tarea1.mostar());
console.log('Tarea',tarea2.mostar());
console.log('Tarea',tarea3.mostar());




//ES6