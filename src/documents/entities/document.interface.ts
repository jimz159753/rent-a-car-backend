import { IClient } from 'src/clients/entities/client.interface';
import { IVehicle } from 'src/vehicles/entities/vehicle.interface';

export interface IDocument {
    name: string;
    client: IClient;
    vehicle: IVehicle;
    timestamp: string;
}
