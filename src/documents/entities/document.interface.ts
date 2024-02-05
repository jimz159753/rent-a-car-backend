import { IRent } from 'src/rents/entities/rent.interface';

export interface IDocument {
    name: string;
    rent: IRent;
    timestamp: string;
    lastUpdate: string;
}
