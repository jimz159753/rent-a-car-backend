export interface IVehicle {
    model: string;
    image?: string;
    brand: string;
    plate: string;
    price: number;
    status: StatusEnum;
    timestamp: string;
}

export enum StatusEnum {
    AVAILABLE = 'Disponible',
    RENTED = 'Alquildo'
}