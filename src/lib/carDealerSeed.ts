import type { DealershipListing } from "./carDealerData.ts";

export const DEMO_VEHICLES_SEED: DealershipListing[] = [
  // 1. CARS: Sedan
  {
    id: "toyota-camry-se-2023",
    title: "Toyota Camry SE 2023",
    slug: "toyota-camry-se-2023",
    transportType: "cars",
    make: "Toyota",
    model: "Camry SE",
    year: 2023,
    condition: "usado",
    price: 27500,
    currency: "USD",
    mileageOrHours: "19,400 mi",
    engine: "2.5L 4-Cilindros DOHC VVT-i (203 HP)",
    fuelType: "Gasolina",
    transmission: "Automática 8 Velocidades",
    drivetrain: "FWD (Tracción Delantera)",
    location: "Distrito Nacional",
    color: "Blanco Perla / Cuero Negro",
    featured: true,
    status: "disponible",
    description: "Excelente estado estético y mecánico, certificado con historial Carfax limpio. Pantalla táctil multimedia compatible con Apple CarPlay y Android Auto, cámara de reversa y paquete de seguridad Toyota Safety Sense 2.5+.",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590362891988-f77804702088?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Apple CarPlay / Android Auto", "Cámara de Reversa HD", "Asientos Eléctricos", "Aros 18\" Deportivos", "Radar Anticolisión", "Llave Inteligente Smart Key"],
    specs: {
      "Cilindrada": "2,487 cc",
      "Potencia": "203 HP @ 6,600 RPM",
      "Consumo Ciudad": "28 MPG",
      "Consumo Carretera": "39 MPG",
      "Pasajeros": "5",
      "Puertas": "4"
    },
    seller: {
      name: "Auto Plaza Premium Motors",
      phone: "+1 (829) 555-0199",
      whatsapp: "18295550199",
      verified: true,
      rating: 4.9,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 2. CARS: Electric EV
  {
    id: "tesla-model-3-highland-2024",
    title: "Tesla Model 3 Highland Long Range AWD 2024",
    slug: "tesla-model-3-highland-2024",
    transportType: "cars",
    make: "Tesla",
    model: "Model 3 Highland Long Range",
    year: 2024,
    condition: "usado",
    price: 41900,
    currency: "USD",
    mileageOrHours: "5,800 mi",
    engine: "Dual Motor Ultra Silencioso (394 HP - 0 a 100 km/h en 4.2s)",
    fuelType: "Eléctrico",
    transmission: "Transmisión Eléctrica Continua",
    drivetrain: "Dual Motor AWD (Tracción Total)",
    location: "Santo Domingo",
    color: "Gris Stealth / Interior Ultra Blanco",
    featured: true,
    status: "disponible",
    description: "Versión Highland 2024 con rediseño aerodinámico, cristales acústicos de doble capa, pantalla trasera táctil de 8 pulgadas para pasajeros y más de 629 km de autonomía homologada WLTP.",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["100% Cero Emisiones", "Autopilot Incluido", "Pantalla Trasera 8\"", "Techo Panorámico de Cristal UV", "Asientos Ventilados y Calefactables", "Sistema de Audio 17 Parlantes"],
    specs: {
      "Batería": "78.1 kWh Litio-NCM",
      "Autonomía": "629 km (WLTP)",
      "Aceleración": "0-100 km/h en 4.2 seg",
      "Velocidad Máxima": "201 km/h",
      "Carga Rápida": "Hasta 250 kW Supercharger"
    },
    seller: {
      name: "EV Dominicana Concesionario",
      phone: "+1 (809) 555-0144",
      whatsapp: "18095550144",
      verified: true,
      rating: 5.0,
      dealerType: "Concesionario Oficial"
    },
    createdAt: new Date().toISOString()
  },
  // 3. CARS: SUV
  {
    id: "toyota-rav4-xle-awd-2023",
    title: "Toyota RAV4 XLE AWD 2023",
    slug: "toyota-rav4-xle-awd-2023",
    transportType: "cars",
    make: "Toyota",
    model: "RAV4 XLE AWD",
    year: 2023,
    condition: "usado",
    price: 34800,
    currency: "USD",
    mileageOrHours: "21,200 mi",
    engine: "2.5L Dynamic Force 4-Cilindros (203 HP)",
    fuelType: "Gasolina",
    transmission: "Automática 8 Velocidades",
    drivetrain: "AWD Multi-Terrain Select",
    location: "Santiago",
    color: "Gris Magnético / Asientos Deportivos",
    featured: true,
    status: "disponible",
    description: "La SUV líder del mercado dominicano e internacional. Tracción Dynamic Torque AWD con modos especiales de nieve, lodo, arena y rocas. Sunroof panorámico y maletero con sensor de pie.",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Tracción AWD Multi-Terreno", "Sunroof Panorámico", "Compuerta Eléctrica Inteligente", "Asistente Pre-Colisión", "Pantalla Táctil HD"],
    specs: {
      "Motor": "2.5L 4 Cilindros",
      "Tracción": "AWD Integral",
      "Capacidad Maletero": "1,065 Litros",
      "Ruedas": "18 Pulgadas Aleación",
      "Airbags": "8 Airbags Frontales y Cortina"
    },
    seller: {
      name: "Cibao Motors Center",
      phone: "+1 (809) 555-0188",
      whatsapp: "18095550188",
      verified: true,
      rating: 4.8,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 4. TRUCKS AND BUSES: Cabezote 18-Wheeler
  {
    id: "freightliner-cascadia-126-2021",
    title: "Freightliner Cascadia 126 Cabina Dormitorio 2021 (Cabezote 18-Wheeler)",
    slug: "freightliner-cascadia-126-2021",
    transportType: "trucks-buses",
    make: "Freightliner",
    model: "Cascadia 126 Sleeper 72\"",
    year: 2021,
    condition: "usado",
    price: 76500,
    currency: "USD",
    mileageOrHours: "245,000 mi",
    engine: "Detroit Diesel DD15 14.8L Turbo Intercooler (505 HP / 1,750 lb-ft Torque)",
    fuelType: "Diesel",
    transmission: "Detroit DT12 Automatizada 12 Velocidades",
    drivetrain: "6x4 Doble Eje Motriz",
    location: "Santo Domingo Este",
    color: "Azul Real Metalizado",
    featured: true,
    status: "disponible",
    description: "Tractocamión cabezote para 18 ruedas en óptimas condiciones de flota certificada. Cabina de 72 pulgadas con litera doble y climatizador auxiliar ParkSmart. Mantenimientos estrictos cada 20,000 millas.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Motor Detroit DD15 505 HP", "Dormitorio 72\" con Doble Litera", "Freno de Motor Jacobs (Jake Brake)", "Seguridad Activa Detroit Assurance 5.0", "Quinta Rueda Holland Neumática", "Tanques de Combustible Duales 240 Gal."],
    specs: {
      "Cilindrada": "14.8 Litros 6 Cilindros en Línea",
      "Torque": "1,750 lb-ft @ 1,080 RPM",
      "Configuración": "6x4 (Tándem Trasero)",
      "Peso Bruto Vehicular": "80,000 lbs (Clase 8)",
      "Suspensión": "AirLiner Neumática Trasera"
    },
    seller: {
      name: "Transportes & Camiones del Caribe",
      phone: "+1 (829) 555-0155",
      whatsapp: "18295550155",
      verified: true,
      rating: 4.9,
      dealerType: "Concesionario Oficial"
    },
    createdAt: new Date().toISOString()
  },
  // 5. SPECIAL MACHINERY: Excavadora Hidráulica Pesada
  {
    id: "caterpillar-320d-excavator-2022",
    title: "Caterpillar 320D Excavadora Hidráulica sobre Orugas 2022",
    slug: "caterpillar-320d-excavator-2022",
    transportType: "special-machinery",
    make: "Caterpillar",
    model: "320D Hydraulic Excavator",
    year: 2022,
    condition: "usado",
    price: 118000,
    currency: "USD",
    mileageOrHours: "3,150 Horas Operativas",
    engine: "Cat C7.1 ACERT Turbo Diésel Industrial (158 HP)",
    fuelType: "Diesel",
    transmission: "Hidrostática Bidireccional de Alto Flujo",
    drivetrain: "Orugas de Acero de Trabajo Pesado",
    location: "La Vega",
    color: "Amarillo Caterpillar Original",
    featured: true,
    status: "disponible",
    description: "Excavadora pesada para movimiento de tierra, minería y construcción civil. Orugas con 85% de vida útil, cabina presurizada con aire acondicionado silencioso y brazo de excavación con balde de 1.19 m³.",
    imageUrl: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Balde Reforzado de 1.19 m³", "Cabina Rops/Fops con Clima", "Línea Hidráulica para Martillo", "Monitor LCD Cat Grade", "Bomba Hidráulica de Caudal Variable", "Cámara Trasera de Seguridad"],
    specs: {
      "Peso Operativo": "22,500 kg (49,600 lbs)",
      "Profundidad Máxima de Excavación": "6.72 Metros",
      "Alcance Máximo a Nivel del Suelo": "9.86 Metros",
      "Fuerza de Desprendimiento": "140 kN",
      "Capacidad Tanque Combustible": "410 Litros"
    },
    seller: {
      name: "Maquinarias & Equipos del Norte",
      phone: "+1 (809) 555-0166",
      whatsapp: "18095550166",
      verified: true,
      rating: 5.0,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 6. WATER TRANSPORT: Lancha Deportiva de Recreo
  {
    id: "sea-ray-spx-210-bowrider-2023",
    title: "Sea Ray SPX 210 Bowrider Lancha Deportiva 2023",
    slug: "sea-ray-spx-210-bowrider-2023",
    transportType: "water-transport",
    make: "Sea Ray",
    model: "SPX 210 Bowrider (21 Pies de Eslora)",
    year: 2023,
    condition: "usado",
    price: 54900,
    currency: "USD",
    mileageOrHours: "78 Horas de Navegación",
    engine: "MerCruiser 4.5L MPI ECT SternDrive (250 HP)",
    fuelType: "Gasolina Marina",
    transmission: "Pata Marina Alpha One",
    drivetrain: "Propulsión Intraborda/Fueraborda Marina",
    location: "La Altagracia",
    color: "Azul Marino Horizon / Tapicería Marfil Náutica",
    featured: true,
    status: "disponible",
    description: "Embarcación deportiva de 21 pies diseñada para deportes acuáticos y navegación recreativa familiar. Incluye torre de wakeboard plegable con toldo bimini de lona marina, plataforma de baño extendida con piso SeaDek y remolque doble eje galvanizado.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Motor MerCruiser 4.5L 250 HP", "Torre Wakeboard con Bimini Top", "Piso de Teca Sintética SeaDek", "Sistema de Audio Náutico Fusion Bluetooth", "Remolque Galvanizado de 2 Ejes", "Capacidad Oficial para 8 Pasajeros"],
    specs: {
      "Eslora Total": "21 Pies y 6 Pulgadas (6.55 m)",
      "Manga": "8 Pies y 6 Pulgadas (2.59 m)",
      "Calado": "36 Pulgadas (Pata abajo)",
      "Capacidad Combustible": "151 Litros (40 Galones)",
      "Peso en Seco": "1,512 kg (3,334 lbs)"
    },
    seller: {
      name: "Marina & Yacht Club Punta Cana",
      phone: "+1 (809) 555-0122",
      whatsapp: "18095550122",
      verified: true,
      rating: 4.9,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 7. MOTOTECHNICS: Moto Naked de Alta Cilindrada
  {
    id: "yamaha-mt09-sp-hyper-naked-2024",
    title: "Yamaha MT-09 SP Hyper Naked 2024",
    slug: "yamaha-mt09-sp-hyper-naked-2024",
    transportType: "mototechnics",
    make: "Yamaha",
    model: "MT-09 SP Gen-4",
    year: 2024,
    condition: "nuevo",
    price: 13900,
    currency: "USD",
    mileageOrHours: "1,200 km",
    engine: "890cc CP3 Tricilíndrico Crossplane DOHC (119 HP @ 10,000 RPM)",
    fuelType: "Gasolina",
    transmission: "Manual 6 Velocidades con Quickshifter 3ra Gen",
    drivetrain: "Cadena RWD",
    location: "Distrito Nacional",
    color: "Icon Performance (Plata / Azul / Negro Mate)",
    featured: true,
    status: "disponible",
    description: "Tope de gama Hyper Naked equipada de fábrica con monoamortiguador trasero Öhlins completamente ajustable y horquilla invertida delantera KYB dorada con revestimiento DLC. Modos de circuito Track personalizables.",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Suspensión Trasera Öhlins Ajustable", "Quickshifter Bidireccional de 3ª Generación", "Pantalla TFT a Color 5 Pulgadas", "IMU de 6 Ejes con Asistencias de Frenada", "Control de Crucero Electrónico", "Iluminación Full LED Proyector"],
    specs: {
      "Cilindrada": "890 cc",
      "Potencia Máxima": "119 HP @ 10,000 RPM",
      "Torque Máximo": "93 Nm @ 7,000 RPM",
      "Peso en Orden de Marcha": "193 kg",
      "Capacidad Tanque": "14 Litros"
    },
    seller: {
      name: "SuperBike RD Concesionario",
      phone: "+1 (809) 555-0133",
      whatsapp: "18095550133",
      verified: true,
      rating: 5.0,
      dealerType: "Concesionario Oficial"
    },
    createdAt: new Date().toISOString()
  },
  // 8. MACHINERY: Tractor Agrícola Industrial
  {
    id: "john-deere-6120m-tractor-2023",
    title: "John Deere 6120M Tractor Agrícola con Cabina Climatizada 2023",
    slug: "john-deere-6120m-tractor-2023",
    transportType: "machinery",
    make: "John Deere",
    model: "6120M Cabina Confort 4WD",
    year: 2023,
    condition: "usado",
    price: 89500,
    currency: "USD",
    mileageOrHours: "920 Horas de Trabajo",
    engine: "John Deere PowerTech PVS 4.5L 4-Cilindros Turbo (120 HP)",
    fuelType: "Diesel",
    transmission: "CommandQuad Plus 24F/24R Semi-Powershift",
    drivetrain: "4WD Doble Tracción Mecánica Delantera",
    location: "Duarte",
    color: "Verde y Amarillo John Deere Emblemático",
    featured: true,
    status: "disponible",
    description: "Tractor agrícola versátil de alto rendimiento con toma de fuerza trasera de 540/1000 RPM, sistema hidráulico de compensación de presión y caudal de 114 l/min, y cabina insonorizada con climatizador digital y suspensión hidroneumática.",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Transmisión CommandQuad Plus 24x24", "TDF Trasera 540/1000 RPM", "Sistema Hidráulico 114 L/min", "Cabina Panorámica Climatizada", "Doble Tracción 4WD con Autoblocante", "Asiento con Suspensión Neumática Activa"],
    specs: {
      "Potencia Nominal": "120 HP @ 2,100 RPM",
      "Potencia Máxima": "133 HP",
      "Capacidad de Elevación Trasera": "5,700 kg",
      "Peso Base": "5,800 kg",
      "Tanque Diésel": "205 Litros"
    },
    seller: {
      name: "AgroEquipos Dominicana",
      phone: "+1 (809) 555-0111",
      whatsapp: "18095550111",
      verified: true,
      rating: 4.9,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  }
];
