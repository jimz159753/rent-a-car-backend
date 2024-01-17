export interface IVehicle {
    model: string;
    ac: boolean;
    type: string;
    people: string;
    doors: string;
    suitcases: string;
    bags: string;
    transmition: TransmitionEnum,
    category: CategoryEnum;
    image: string;
    brand: string;
    plate: string;
    price: string;
    status: StatusEnum;
    timestamp: string;
    lastUpdate: string;
}

export enum TransmitionEnum {
    AUTOMATIC = 'Automático',
    STANDARD = 'Manual'
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