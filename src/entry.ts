//tsc --version para ver versión de JavaScript
//tsc --init --> to initialize the tsconfig.json in the folder.
//tsc --noEmitOnError --watch
//--noEmitOnError --> no emite salidas si se informa algún error
//tsc -w

import Persona from "./Persona.js";
import { Arbol,Familia } from "./Arbol.js";
const saludo = (nombre:string):string => {
    return "Hola "+nombre;
}

let fechaEl = <HTMLInputElement> document.querySelector("#fecha-nacimiento");
let nombreEl = <HTMLInputElement> document.querySelector("#nombre");
let primerApellidoEl = <HTMLInputElement> document.querySelector("#primer-apellido");
let segundoApellidoEl = <HTMLInputElement> document.querySelector("#segundo-apellido");
let chkEl = <HTMLInputElement> document.querySelector("#masculino");
let btn = <HTMLButtonElement> document.querySelector(".btn");


btn.onclick = e => {
    e.preventDefault();
    let sexo:"M"|"F" = chkEl.checked ? 'M':'F';
    const p1 = new Persona(nombreEl.value,primerApellidoEl.value,segundoApellidoEl.value,sexo);
    const div:HTMLDivElement = document.createElement("div");
    p1.fechaNacimiento = fechaEl.value;
    div.innerHTML = p1.toString();
    document.body.appendChild(div);
}



let b: Arbol = new Arbol(
    {
        nombreComun: "Carballo",
        especie: "robur, L",
        genero: "Quercus",
        familia: new Familia("Fagaceae")
    }
);
console.log(b.toString())







