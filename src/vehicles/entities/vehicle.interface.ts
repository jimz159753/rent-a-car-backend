export interface IVehicle {
    model: string;
    category: CategoryEnum;
    image: string;
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

export enum CategoryEnum {
    SEDAN = 'Sedan',
    SUV = 'SUV',
    MINIVAN = 'MiniVan',
    VAN = 'Van'
}