
/*
    ===== Código de TypeScript =====

    let nombre
*/
/*
function sumar(a: number,b: number){
    return a + b;
}
const sumarFlecha = (a,b) => {
    return a + b;
}

const resultado = sumar(10, 20);

console.log(resultado);
*/ 
/*
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
   
}
function curar(personaje: PersonajeLOR, curarX:number): void{
 personaje.pv += curarX;
 console.log(personaje);
 
}
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Artemisa',
    pv: 35,
     mostrarHP() {
        console.log('Puntos de vida', this.pv);
        
    }
}
curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();
*/
/*
interface superHeroe {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion: () => string;
}
const superHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion: Direccion,
    mostrarDireccion: () => string;
        

    }
    interface Direccion {
        calle: string;
        pais: string;
        ciudad: string;
    }
    mostrarDireccion(){
        return this.nombre+ ',' +this.direccion.ciudad+ ',' + this.direccion.pais;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}
interface Detalles {
    autor: string;
    anio: number;
}
const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles: {
        autor: 'Sam Smith',
        anio: 2017
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log('El volumen actual de: ',volumen);
console.log('El segundo actual de: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor actual de: ',autor);
