import { Produit } from 'src/lvt-api/src/models';
import { Client } from 'src/lvt-api/src/models';
export interface Location{
    datedebut: Date;
    datefin: Date;
    produit: Produit;
    client: Client;
    accepted: boolean;
} 