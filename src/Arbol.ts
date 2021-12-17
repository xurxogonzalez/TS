interface IArbol{
    nombreComun?:string;
    familia?:Familia;
    genero?:string;
    especie?:string;
}
export class Familia{
    public _familia:string;
    public _description?:string;
    constructor(familia:string,description?:string){
        this._familia = familia;
        this._description = description || "";
    }
}
export class Arbol{
    private _nombreComun?:string="";
    private _familia?:Familia;
    private _genero?:string="";
    private _especie?:string="";
    /**
     * @description {nombreComun,familia,genero,especie}
     * @param obj interface
     */
    constructor(obj?:IArbol){
        this._nombreComun = obj && obj.nombreComun || "";
        this._familia = obj && obj.familia || null;
        this._genero = obj && obj.genero || "";
        this._especie = obj && obj.especie || "";
    }

    toString(): string {
        return `
            <ul class="fields">
                <li class="field"><em>Nombre</em>:<mark>${this._nombreComun}</mark></li>            
                <li class="field"><em>Familia</em>:<mark>${this._familia._familia}</mark></li>
                <li class="field"><em>Género</em>:<mark>${this._genero}</mark></li>
                <li class="field"><em>Especie</em>:<mark>${this._genero} ${this._especie}</mark></li>
            </ul>
        `;
    }
    
}