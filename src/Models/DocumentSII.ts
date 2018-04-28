import { Client } from "./Client";
import { Detail } from "./Detail";
import { References } from "./References";

export class DocumentSII {
    codeSii: number = 32;//código tributario del documento.
    declareSii: number = 1;// Si se desea declarar el documento al Servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).
    emissionDate: number = 0; //Fecha de emisión del documento, se envía en formato GMT (Integer).
    expirationDate: number = 0; //Fecha vencimiento del documento, se envía en formato GMT (Integer).
    client: Client | null = null;
    details: Detail[] = [];
    references: References[] = []; 

    constructor() {

    }
}