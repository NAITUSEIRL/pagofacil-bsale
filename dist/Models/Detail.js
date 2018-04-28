"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Detail {
    constructor() {
        this.netUnitValue = 9999999; //Valor del producto
        this.quantity = 1; //Cantidad del producto
        this.taxId = "[1,2]"; //Arreglo de identificadores de los impuestos a utilizar, estos tienen que ir dentro de "[]" 
        this.comment = "Nombre";
        this.discount = 0; //Porcentaje del descuento si se desea aplicar uno. (Float).
    }
}
exports.Detail = Detail;
