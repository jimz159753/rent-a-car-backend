import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export interface IRent {
    client: IClient;
    vehicle: IVehicle;
    days: string;
    payment: string;
    total: string;
    description: string;
    timestamp: string;
}