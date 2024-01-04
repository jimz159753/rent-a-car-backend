export interface IVehicle {
    model: string;
    image?: string;
    brand: string;
    plate: string;
    price: string;
    status: StatusEnum;
    timestamp: string;
}

export enum StatusEnum {
    AVAILABLE = 'Disponible',
    RENTED = 'Alquildo'
}