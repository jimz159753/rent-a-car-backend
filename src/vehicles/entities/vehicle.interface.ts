import { IClient } from 'src/clients/entities/client.interface';

export interface IVehicle {
    client: IClient['name'];
    vehicle: string;
    days: number;
    price: number;
    payment: number;
}
