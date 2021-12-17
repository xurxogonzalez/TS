export default class Persona {
    private _nombre: string| "";
    private _primerApellido: string| "";
    private _segundoApellido: string| "" = "";
    private _fechaNacimiento: Date;
    private _genero?: 'M' | 'F';

    /**
     * Método Constructor
     * @param nombre - Nombre de la persona
     * @param primerApellido - Primer apellido
     * @param segundoApellido - Segundo apellido
     * @param fechaNacimiento - Fecha de nacimiento ? Parámetro optativo
     */

    constructor(nombre: string|"", primerApellido: string|"", segundoApellido?: string|"", genero?:'M'|'F') {
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        if(segundoApellido)
            this._segundoApellido = segundoApellido;
        if(genero)
            this._genero = genero;
    }
    /**
     * @description setter para introducir la fecha de nacimiento
     * @param args - Parámetro rest: año (aaaa), mm (mes), dd (día)
     */
    setFechaNacimiento(...args:[aaaa:number,mm:number,dd:number]){
        if(args[1])
            args[1]=args[1]-1;
        this._fechaNacimiento = new Date(...args);
    }
    /**
     * @description setter para la fecha de nacimiento
     * @param - Parámetro string: "aaaa-mm-dd"
     */
    set fechaNacimiento(fecha:string){
       if(fecha){
        let date = fecha.split("-").map(value=>Number(value));
        this._fechaNacimiento = new Date(date[0],date[1]-1,date[2]);
       }else{
           this._fechaNacimiento = null;
       }
    }
    /**
     * @description getter Se obtiene la fecha de nacimiento. Formato dd-mm-aaaa
     */
    get fechaNacimiento():string{
        return this._fechaNacimiento?`${this._fechaNacimiento.getDate()}-${this._fechaNacimiento.getMonth()+1}-${this._fechaNacimiento.getFullYear()}`:"";
    }

    get genero():string{
        return this._genero==='M'?'Hombre':'Mujer';
    }
    /**
     * 
     * @returns La edad de forma entera del individuo o nada si no se da su edad
     */
    dimeEdad():number|string{
        return this._fechaNacimiento? Math.floor((Number(Date.now()) - Number(this._fechaNacimiento))/(1000*60*60*24*365)):"Desconocida";
    }
    /**
     * 
     * @returns Retorna los campos de la clase persona
     */
    toString(): string {
        return `
            <ul class="fields">
                <li class="field"><em>Nombre</em>:<mark>${this._nombre}</mark></li>
                <li class="field"><em>Primer apellido</em>:<mark>${this._primerApellido}</mark></li>
                <li class="field"><em>Segundo apellido</em>:<mark>${this._segundoApellido}</mark></li>
                <li class="field"><em>Sexo</em>:<mark>${this.genero}</mark></li>
                <li class="field"><em>Fecha de nacimiento</em>:<mark>${this.fechaNacimiento}</mark></li>
                <li class="field"><em>Edad</em>:<mark>${this.dimeEdad()}</mark></li>
            </ul>
        `;
    }
}