var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Persona = /** @class */ (function () {
    /**
     * Método Constructor
     * @param nombre - Nombre de la persona
     * @param primerApellido - Primer apellido
     * @param segundoApellido - Segundo apellido
     * @param fechaNacimiento - Fecha de nacimiento ? Parámetro optativo
     */
    function Persona(nombre, primerApellido, segundoApellido, genero) {
        this._segundoApellido = "";
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        if (segundoApellido)
            this._segundoApellido = segundoApellido;
        if (genero)
            this._genero = genero;
    }
    /**
     * @description setter para introducir la fecha de nacimiento
     * @param args - Parámetro rest: año (aaaa), mm (mes), dd (día)
     */
    Persona.prototype.setFechaNacimiento = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[1])
            args[1] = args[1] - 1;
        this._fechaNacimiento = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
    };
    Object.defineProperty(Persona.prototype, "fechaNacimiento", {
        /**
         * @description getter Se obtiene la fecha de nacimiento. Formato dd-mm-aaaa
         */
        get: function () {
            return this._fechaNacimiento ? "".concat(this._fechaNacimiento.getDate(), "-").concat(this._fechaNacimiento.getMonth() + 1, "-").concat(this._fechaNacimiento.getFullYear()) : "";
        },
        /**
         * @description setter para la fecha de nacimiento
         * @param - Parámetro string: "aaaa-mm-dd"
         */
        set: function (fecha) {
            if (fecha) {
                var date = fecha.split("-").map(function (value) { return Number(value); });
                this._fechaNacimiento = new Date(date[0], date[1] - 1, date[2]);
            }
            else {
                this._fechaNacimiento = null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "genero", {
        get: function () {
            return this._genero === 'M' ? 'Hombre' : 'Mujer';
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @returns La edad de forma entera del individuo o nada si no se da su edad
     */
    Persona.prototype.dimeEdad = function () {
        return this._fechaNacimiento ? Math.floor((Number(Date.now()) - Number(this._fechaNacimiento)) / (1000 * 60 * 60 * 24 * 365)) : "Desconocida";
    };
    /**
     *
     * @returns Retorna los campos de la clase persona
     */
    Persona.prototype.toString = function () {
        return "\n            <ul class=\"fields\">\n                <li class=\"field\"><em>Nombre</em>:<mark>".concat(this._nombre, "</mark></li>\n                <li class=\"field\"><em>Primer apellido</em>:<mark>").concat(this._primerApellido, "</mark></li>\n                <li class=\"field\"><em>Segundo apellido</em>:<mark>").concat(this._segundoApellido, "</mark></li>\n                <li class=\"field\"><em>Sexo</em>:<mark>").concat(this.genero, "</mark></li>\n                <li class=\"field\"><em>Fecha de nacimiento</em>:<mark>").concat(this.fechaNacimiento, "</mark></li>\n                <li class=\"field\"><em>Edad</em>:<mark>").concat(this.dimeEdad(), "</mark></li>\n            </ul>\n        ");
    };
    return Persona;
}());
export default Persona;
