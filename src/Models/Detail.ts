export class Detail {
    netUnitValue: number = 9999999;//Valor del producto
    quantity: number = 1; //Cantidad del producto
    taxId: string = "[1,2]";//Arreglo de identificadores de los impuestos a utilizar, estos tienen que ir dentro de "[]" 
    comment: string = "Nombre";
    discount: number = 0; //Porcentaje del descuento si se desea aplicar uno. (Float).
}