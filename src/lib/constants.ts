export interface DominicanProvince {
    id: string;
    name: string;
    region: 'Metropolitana' | 'Norte / Cibao' | 'Sur' | 'Este';
}

export const DOMINICAN_PROVINCES: DominicanProvince[] = [
    // Región Metropolitana
    { id: 'dn', name: 'Distrito Nacional', region: 'Metropolitana' },
    { id: 'santo-domingo-este', name: 'Santo Domingo Este', region: 'Metropolitana' },
    { id: 'santo-domingo-oeste', name: 'Santo Domingo Oeste', region: 'Metropolitana' },
    { id: 'santo-domingo-norte', name: 'Santo Domingo Norte', region: 'Metropolitana' },
    
    // Región Norte / Cibao
    { id: 'santiago', name: 'Santiago de los Caballeros', region: 'Norte / Cibao' },
    { id: 'la-vega', name: 'La Vega', region: 'Norte / Cibao' },
    { id: 'puerto-plata', name: 'Puerto Plata', region: 'Norte / Cibao' },
    { id: 'duarte', name: 'Duarte (San Fco. de Macorís)', region: 'Norte / Cibao' },
    { id: 'espaillat', name: 'Espaillat (Moca)', region: 'Norte / Cibao' },
    { id: 'monsenor-nouel', name: 'Monseñor Nouel (Bonao)', region: 'Norte / Cibao' },
    { id: 'valverde', name: 'Valverde (Mao)', region: 'Norte / Cibao' },
    { id: 'monte-cristi', name: 'Monte Cristi', region: 'Norte / Cibao' },
    { id: 'samana', name: 'Samaná', region: 'Norte / Cibao' },
    { id: 'sanchez-ramirez', name: 'Sánchez Ramírez (Cotui)', region: 'Norte / Cibao' },
    { id: 'hermanas-mirabal', name: 'Hermanas Mirabal (Salcedo)', region: 'Norte / Cibao' },
    { id: 'dajabon', name: 'Dajabón', region: 'Norte / Cibao' },
    { id: 'santiago-rodriguez', name: 'Santiago Rodríguez', region: 'Norte / Cibao' },
    { id: 'maria-trinidad-sanchez', name: 'María Trinidad Sánchez (Nagua)', region: 'Norte / Cibao' },

    // Región Este
    { id: 'la-altagracia', name: 'La Altagracia (Punta Cana / Higüey)', region: 'Este' },
    { id: 'la-romana', name: 'La Romana', region: 'Este' },
    { id: 'san-pedro-de-macoris', name: 'San Pedro de Macorís', region: 'Este' },
    { id: 'hato-mayor', name: 'Hato Mayor', region: 'Este' },
    { id: 'el-seibo', name: 'El Seibo', region: 'Este' },
    { id: 'monte-plata', name: 'Monte Plata', region: 'Este' },

    // Región Sur
    { id: 'san-cristobal', name: 'San Cristóbal', region: 'Sur' },
    { id: 'peravia', name: 'Peravia (Baní)', region: 'Sur' },
    { id: 'azua', name: 'Azua', region: 'Sur' },
    { id: 'barahona', name: 'Barahona', region: 'Sur' },
    { id: 'san-juan', name: 'San Juan de la Maguana', region: 'Sur' },
    { id: 'san-jose-de-ocoa', name: 'San José de Ocoa', region: 'Sur' },
    { id: 'baoruco', name: 'Baoruco (Neyba)', region: 'Sur' },
    { id: 'independencia', name: 'Independencia (Jimaní)', region: 'Sur' },
    { id: 'pedernales', name: 'Pedernales', region: 'Sur' },
    { id: 'elias-pina', name: 'Elías Piña', region: 'Sur' }
];

export const VEHICLE_BRANDS = [
    'Toyota', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Jeep', 'Ford', 'Chevrolet', 
    'Mercedes-Benz', 'BMW', 'Audi', 'Lexus', 'Mazda', 'Mitsubishi', 'Volkswagen', 
    'Subaru', 'Land Rover', 'Porsche', 'Suzuki', 'Isuzu', 'RAM'
];

export const VEHICLE_BODY_TYPES = [
    'SUV / Jeepeta', 'Sedán', 'Camioneta / Pickup 4x4', 'Hatchback', 'Coupe / Deportivo', 
    'Crossover', 'Van / Minivan', 'Camión / Pesado'
];

export const FUEL_TYPES = [
    'Gasolina', 'Diesel / Gasoil', 'Híbrido', 'Eléctrico', 'GLP / Gas'
];

export const TRANSMISSION_TYPES = [
    'Automática', 'Manual', 'CVT', 'Secuencial / Tiptronic'
];

export const DRIVETRAINS = [
    '4x4 / 4WD', 'AWD (Tracción Integral)', 'Delantera (FWD)', 'Trasera (RWD)'
];

export const WORKSHOP_CATEGORIES = [
    { id: 'mecanica', label: 'Taller de Mecánica General', icon: 'fa-wrench' },
    { id: 'repuestos', label: 'Tienda de Repuestos Nuevos y Usados', icon: 'fa-gears' },
    { id: 'desabolladura', label: 'Desabolladura y Pintura (Body Shop)', icon: 'fa-spray-can' },
    { id: 'electricidad', label: 'Electricidad y Diagnóstico Computarizado', icon: 'fa-bolt' },
    { id: 'aire-acondicionado', label: 'Aire Acondicionado Automotriz', icon: 'fa-snowflake' },
    { id: 'gomas-alineacion', label: 'Gomería, Alineación y Balanceo', icon: 'fa-circle-notch' }
];
