//tsc --version para ver versión de JavaScript
//tsc --init --> to initialize the tsconfig.json in the folder.
//tsc --noEmitOnError --watch
//--noEmitOnError --> no emite salidas si se informa algún error
//tsc -w
import Persona from "./Persona.js";
import { Arbol, Familia } from "./Arbol.js";
var saludo = function (nombre) {
    return "Hola " + nombre;
};
var fechaEl = document.querySelector("#fecha-nacimiento");
var nombreEl = document.querySelector("#nombre");
var primerApellidoEl = document.querySelector("#primer-apellido");
var segundoApellidoEl = document.querySelector("#segundo-apellido");
var chkEl = document.querySelector("#masculino");
var btn = document.querySelector(".btn");
btn.onclick = function (e) {
    e.preventDefault();
    var sexo = chkEl.checked ? 'M' : 'F';
    var p1 = new Persona(nombreEl.value, primerApellidoEl.value, segundoApellidoEl.value, sexo);
    var div = document.createElement("div");
    p1.fechaNacimiento = fechaEl.value;
    div.innerHTML = p1.toString();
    document.body.appendChild(div);
};
var b = new Arbol({
    nombreComun: "Carballo",
    especie: "robur, L",
    genero: "Quercus",
    familia: new Familia("Fagaceae")
});
console.log(b.toString());
