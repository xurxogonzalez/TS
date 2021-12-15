export default class Persona{
    public _nombre:string;
    public _apellidos:string;
    protected _edad: Date = new Date();

    /**
     * Método Constructor
     * @param nombre - Nombre de la persona
     * @param apellidos - Apellido o apellidos de la persona
     */
    constructor(nombre:string,apellidos:string){
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

    toString():string{
        return this._nombre;
    }
}