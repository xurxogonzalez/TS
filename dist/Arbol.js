var Familia = /** @class */ (function () {
    function Familia(familia, description) {
        this._familia = familia;
        this._description = description || "";
    }
    return Familia;
}());
export { Familia };
var Arbol = /** @class */ (function () {
    /**
     * @description {nombreComun,familia,genero,especie}
     * @param obj interface
     */
    function Arbol(obj) {
        this._nombreComun = "";
        this._genero = "";
        this._especie = "";
        this._nombreComun = obj && obj.nombreComun || "";
        this._familia = obj && obj.familia || null;
        this._genero = obj && obj.genero || "";
        this._especie = obj && obj.especie || "";
    }
    Arbol.prototype.toString = function () {
        return "\n            <ul class=\"fields\">\n                <li class=\"field\"><em>Nombre</em>:<mark>".concat(this._nombreComun, "</mark></li>            \n                <li class=\"field\"><em>Familia</em>:<mark>").concat(this._familia._familia, "</mark></li>\n                <li class=\"field\"><em>G\u00E9nero</em>:<mark>").concat(this._genero, "</mark></li>\n                <li class=\"field\"><em>Especie</em>:<mark>").concat(this._genero, " ").concat(this._especie, "</mark></li>\n            </ul>\n        ");
    };
    return Arbol;
}());
export { Arbol };
