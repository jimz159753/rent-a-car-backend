import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export interface IRent {
    client: IClient;
    vehicle: IVehicle;
    days: number;
    payment: number;
    total: number;
    description: string;
    timestamp: string;
}