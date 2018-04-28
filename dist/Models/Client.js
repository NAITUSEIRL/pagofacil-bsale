"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor() {
        this.code = null; //Rut del cliente
        this.city = null; //Ciudad del cliente 
        this.company = null; //Compania del cliente
        this.municipality = null; //Comuna del cliente
        this.activity = null; // Giro del cliente
        this.address = null; // Direccion del cliente
        this.isForeigner = 0; //Si es extranjero es 1
    }
}
exports.Client = Client;
