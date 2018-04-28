"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentSII {
    constructor() {
        this.codeSii = 34; //Codigo tributario del documento. (Integer).
        this.declareSii = 1; // Si se desea declarar el documento al Servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).
        this.emissionDate = 0; //Fecha de emisión del documento, se envía en formato GMT (Integer).
        this.expirationDate = 0; //Fecha vencimiento del documento, se envía en formato GMT (Integer).
        this.client = null;
        this.details = [];
        this.references = [];
        //Se agregan por defecto las fechas en caso de no venir.
        this.emissionDate = (new Date).getTime();
        this.expirationDate = (new Date).getTime();
    }
}
exports.DocumentSII = DocumentSII;
