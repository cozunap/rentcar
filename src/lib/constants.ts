export interface VehicleCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
}

export const MARKETPLACE_CATEGORIES: VehicleCategory[] = [
    { id: 'carros', name: 'Carros & Sedanes', icon: 'fa-car-side', description: 'Sedanes, compactos, hatchbacks y coupés' },
    { id: 'suvs', name: 'SUVs & Jeepetas', icon: 'fa-car', description: 'Crossovers, SUVs familiares y 4x4' },
    { id: 'camionetas', name: 'Camionetas / Pickups', icon: 'fa-truck-pickup', description: 'Pickups de trabajo, 4x4 y doble cabina' },
    { id: 'motores', name: 'Motores & Motocicletas', icon: 'fa-motorcycle', description: 'Motos deportivas, scooters, enduro y de paseo' },
    { id: 'botes', name: 'Botes & Embarcaciones', icon: 'fa-ship', description: 'Lanchas, yates, botes de pesca y jet skis' },
    { id: 'pesados', name: 'Camiones & Pesados', icon: 'fa-truck', description: 'Cabezotes, volquetas, furgones y maquinaria pesada' }
];

export const VEHICLE_BRANDS = [
    // Carros y Camionetas
    'Toyota', 'Honda', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'Nissan', 'Jeep', 
    'Mercedes-Benz', 'BMW', 'Audi', 'Lexus', 'Porsche', 'Mazda', 'Mitsubishi', 
    'Volkswagen', 'Land Rover', 'Subaru', 'Volvo', 'RAM', 'GMC', 'Dodge',
    // Motos
    'Yamaha', 'Honda Motos', 'Kawasaki', 'Suzuki Motos', 'Harley-Davidson', 'Ducati', 'KTM', 'BMW Motorrad',
    // Embarcaciones
    'Sea Ray', 'Boston Whaler', 'Yamaha Marine', 'Bayliner', 'Chaparral', 'Grady-White', 'Sunseeker'
];

export const VEHICLE_CONDITIONS = [
    'Recién Importado (Limpio de Carfax)',
    'Usado Local',
    'Nuevo de Agencia (0 Km)',
    'Certificado de Dealer'
];

export const TRANSMISSION_TYPES = [
    'Automática', 'Manual', 'Secuencial / Tiptronic', 'CVT'
];

export const DRIVETRAINS = [
    '4x4 / 4WD', 'AWD (Tracción Total)', 'Delantera (FWD)', 'Trasera (RWD)', 'Propulsión Marina'
];

export const FUEL_TYPES = [
    'Gasolina', 'Diesel / Gasoil', 'Híbrido', 'Eléctrico (EV)', 'GLP / Gas Natural'
];

export const DOMINICAN_PROVINCES = [
    'Distrito Nacional', 'Santo Domingo Este', 'Santo Domingo Oeste', 'Santo Domingo Norte',
    'Santiago de los Caballeros', 'La Vega', 'Puerto Plata', 'San Cristóbal', 'La Altagracia (Punta Cana / Bávaro)',
    'La Romana', 'San Pedro de Macorís', 'Duarte (San Fco. de Macorís)', 'Espaillat (Moca)', 'Monseñor Nouel (Bonao)',
    'Peravia (Baní)', 'Azua', 'Barahona', 'San Juan', 'Samaná', 'Monte Cristi', 'Valverde (Mao)'
];
