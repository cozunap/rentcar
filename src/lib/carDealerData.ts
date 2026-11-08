// TuCarroYMas Data Models & Taxonomy Architecture

export interface TransportType {
  id: string;
  name: string;
  nameEs: string;
  icon: string;
  description: string;
  count?: number;
}

export const TRANSPORT_TYPES: TransportType[] = [
  {
    id: "cars",
    name: "Cars",
    nameEs: "Carros y Automóviles",
    icon: "fa-car",
    description: "Sedanes, coupés, hatchbacks, híbridos y vehículos 100% eléctricos."
  },
  {
    id: "trucks-buses",
    name: "Trucks and Buses",
    nameEs: "Autobuses y Camiones",
    icon: "fa-bus",
    description: "Cabezotes 18-wheelers, furgonetas de carga, minibuses y autobuses interurbanos."
  },
  {
    id: "special-machinery",
    name: "Special Machinery",
    nameEs: "Maquinaria Especial y Pesada",
    icon: "fa-tractor",
    description: "Excavadoras, retroexcavadoras, grúas telescópicas y equipo de movimiento de tierra."
  },
  {
    id: "water-transport",
    name: "Water Transport",
    nameEs: "Transporte Acuático y Embarcaciones",
    icon: "fa-ship",
    description: "Lanchas deportivas, yates de recreo, motos de agua (jetski) y veleros."
  },
  {
    id: "mototechnics",
    name: "Mototechnics",
    nameEs: "Motocicletas y Mototécnica",
    icon: "fa-motorcycle",
    description: "Motos superdeportivas, naked, scooters, cuatrimotos (ATV) y UTV side-by-side."
  },
  {
    id: "machinery",
    name: "Machinery",
    nameEs: "Maquinaria Industrial y Agrícola",
    icon: "fa-cogs",
    description: "Tractores agrícolas, montacargas industriales, generadores diésel pesados y compresores."
  }
];

export const BODY_TYPES = [
  "Sedán",
  "SUV / Crossover",
  "Camioneta / Pick-up",
  "Coupé / Deportivo",
  "Cabezote / 18-Wheeler",
  "Autobús / Van",
  "Excavadora / Maquinaria",
  "Lancha / Bowrider",
  "Moto Naked / Deportiva",
  "Tractor Agrícola",
  "Hatchback",
  "Convertible"
];

export const BRANDS_BY_TRANSPORT: Record<string, string[]> = {
  cars: ["Toyota", "Honda", "Tesla", "Hyundai", "Mercedes-Benz", "BMW", "Audi", "Nissan", "Ford", "Chevrolet", "Kia", "Lexus", "Porsche"],
  "trucks-buses": ["Freightliner", "Mack", "International", "Volvo Trucks", "Kenworth", "Mercedes-Benz Trucks", "Hino", "Isuzu", "Yutong", "Marcopolo"],
  "special-machinery": ["Caterpillar", "Komatsu", "JCB", "Bobcat", "Case Construction", "Liebherr", "John Deere Industrial", "Sany", "Hitachi"],
  "water-transport": ["Sea Ray", "Boston Whaler", "Yamaha Marine", "Sunseeker", "Chaparral", "Bayliner", "Azimut", "Regal Boats", "Sea-Doo"],
  mototechnics: ["Yamaha", "Honda", "Kawasaki", "Suzuki", "Ducati", "BMW Motorrad", "KTM", "Harley-Davidson", "Can-Am", "Triumph"],
  machinery: ["John Deere", "Caterpillar", "Massey Ferguson", "New Holland", "Kubota", "Toyota Forklift", "Komatsu", "Cummins"]
};

export const DOMINICAN_PROVINCES = [
  "Distrito Nacional",
  "Santo Domingo",
  "Santo Domingo Este",
  "Santiago",
  "La Altagracia",
  "La Vega",
  "Puerto Plata",
  "San Cristóbal",
  "San Pedro de Macorís",
  "La Romana",
  "Duarte",
  "Espaillat",
  "Valverde",
  "Samaná",
  "Peravia",
  "Monseñor Nouel",
  "Azua",
  "Barahona",
  "Monte Cristi",
  "Hato Mayor"
];

export interface DealershipListing {
  id: string;
  title: string;
  slug: string;
  transportType: "cars" | "trucks-buses" | "special-machinery" | "water-transport" | "mototechnics" | "machinery";
  category?: string; // Estilo o categoría exacta: sedans, suvs, trucks, commercial, boats, coupes, hatchbacks, vans, convertibles, wagons, 4wds, hybrids, electrics, machinery
  make: string;
  model: string;
  year: number;
  condition: "nuevo" | "usado" | "certificado";
  price: number;
  currency: "USD" | "DOP";
  mileageOrHours: string;
  engine: string;
  fuelType: "Gasolina" | "Diesel" | "Eléctrico" | "Híbrido" | "Gasolina Marina";
  transmission: string;
  drivetrain: string;
  location: string;
  color: string;
  featured: boolean;
  status: "disponible" | "vendido" | "reservado";
  description: string;
  imageUrl: string;
  gallery: string[];
  features: string[];
  specs: Record<string, string>;
  seller: {
    name: string;
    phone: string;
    whatsapp: string;
    verified: boolean;
    rating?: number;
    dealerType: "Concesionario Oficial" | "Dealer Autorizado" | "Vendedor Particular";
  };
  createdAt: string;
}
