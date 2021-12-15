//tsc --version para ver versión de JavaScript
//tsc --init --> to initialize the tsconfig.json in the folder.
//tsc ./src/entry.ts --noEmitOnError --watch
//--noEmitOnError --> no emite salidas si se informa algún error

import Persona from "./Persona";
const saludo = (nombre:string):string => {
    return "Hola "+nombre;
}

let p1 = new Persona("Xurxo","González");
console.log(saludo(p1._nombre));