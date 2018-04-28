import { Client } from "./Client";
import { Detail } from "./Detail";
import { References } from "./References";
export declare class DocumentSII {
    documentTypeId: number;
    declareSii: number;
    emissionDate: number;
    expirationDate: number;
    client: Client | null;
    details: Detail[];
    references: References[];
    constructor();
}
