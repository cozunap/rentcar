import type { DealershipListing } from "./carDealerData.ts";

export const DEMO_VEHICLES_SEED: DealershipListing[] = [
  // 1. CARS: Sedan
  {
    id: "toyota-camry-se-2023",
    title: "Toyota Camry SE 2023",
    slug: "toyota-camry-se-2023",
    transportType: "cars",
    category: "sedans",
    make: "Toyota",
    model: "Camry SE",
    year: 2023,
    condition: "certificado",
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
      dealerSlug: "auto-plaza-premium-motors",
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
    category: "electrics",
    make: "Tesla",
    model: "Model 3 Highland Long Range",
    year: 2024,
    condition: "nuevo",
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
      dealerSlug: "ev-dominicana-concesionario",
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
    category: "suvs",
    make: "Toyota",
    model: "RAV4 XLE AWD",
    year: 2023,
    condition: "certificado",
    price: 33500,
    currency: "USD",
    mileageOrHours: "14,200 mi",
    engine: "2.5L 4-Cilindros Dynamic Force (203 HP)",
    fuelType: "Gasolina",
    transmission: "Automática 8 Velocidades con Modo Secuencial",
    drivetrain: "AWD Tracción en las 4 Ruedas con Multi-Terrain Select",
    location: "Santiago",
    color: "Gris Magnético Metalizado",
    featured: true,
    status: "disponible",
    description: "Jeepeta familiar moderna y confiable, tracción AWD inteligente para todo tipo de terrenos en RD. Techo corredizo eléctrico, compuerta trasera eléctrica y garantía extendida vigente.",
    imageUrl: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["AWD Inteligente con Multi-Terrain", "Sunroof Eléctrico", "Toyota Safety Sense 2.5", "Monitor de Punto Ciego (BSM)", "Compuerta Trasera Eléctrica", "Climatizador Dual Automático"],
    specs: {
      "Cilindrada": "2,494 cc",
      "Potencia": "203 HP @ 6,600 RPM",
      "Despeje del Suelo": "8.4 pulgadas",
      "Capacidad Maletero": "1,065 Litros",
      "Pasajeros": "5 Adultos Cómodos"
    },
    seller: {
      name: "Cibao Motors Concesionario",
      dealerSlug: "cibao-motors-concesionario",
      phone: "+1 (809) 555-0177",
      whatsapp: "18095550177",
      verified: true,
      rating: 4.8,
      dealerType: "Concesionario Oficial"
    },
    createdAt: new Date().toISOString()
  },
  // 4. TRUCKS: 18-Wheeler Heavy Commercial
  {
    id: "freightliner-cascadia-126-2021",
    title: "Freightliner Cascadia 126 Cabina Dormitorio 2021 (Cabezote 18-Wheeler)",
    slug: "freightliner-cascadia-126-2021",
    transportType: "trucks-buses",
    category: "commercial",
    make: "Freightliner",
    model: "Cascadia 126 Sleeper 72\"",
    year: 2021,
    condition: "usado",
    price: 68500,
    currency: "USD",
    mileageOrHours: "248,000 mi",
    engine: "Detroit Diesel DD15 14.8L Turbo Intercooler (505 HP / 1,750 lb-ft Torque)",
    fuelType: "Diesel",
    transmission: "Detroit DT12 Automatizada 12 Velocidades",
    drivetrain: "6x4 Doble Eje Motriz Trasero con Bloqueador",
    location: "Santo Domingo Este",
    color: "Rojo Bermellón Corporativo / Chasis Negro",
    featured: true,
    status: "disponible",
    description: "Cabezote de carga pesada listo para trabajar rutas nacionales y puertos (Haina / Caucedo). Mantenimiento riguroso de flotilla, frenos Jake Brake de 3 etapas, aire acondicionado independiente auxiliar para descanso (ParkSmart).",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Freno de Motor Detroit Jake Brake", "Cabina Dormitorio Doble Litera 72\"", "Sistema Detroit Assurance 5.0 Radar", "Quinta Rueda Holland Deslizable", "Doble Tanque Diésel 240 Galones", "Nevera y Conexiones Inversor 120V"],
    specs: {
      "Motor": "Detroit DD15 14.8L Heavy Duty",
      "Potencia": "505 HP @ 1,625 RPM",
      "Torque": "1,750 lb-ft @ 975 RPM",
      "Capacidad Arrastre (GCWR)": "80,000 lbs (36.3 Toneladas)",
      "Suspensión": "Neumática Detroit Airliner 40K"
    },
    seller: {
      name: "Flotillas del Caribe SRL",
      dealerSlug: "transpesados-del-caribe",
      phone: "+1 (809) 555-0188",
      whatsapp: "18095550188",
      verified: true,
      rating: 4.9,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 5. SPECIAL MACHINERY: Excavator
  {
    id: "caterpillar-320d-excavator-2022",
    title: "Caterpillar 320D Excavadora Hidráulica sobre Orugas 2022",
    slug: "caterpillar-320d-excavator-2022",
    transportType: "special-machinery",
    category: "machinery",
    make: "Caterpillar",
    model: "320D Hydraulic Excavator",
    year: 2022,
    condition: "usado",
    price: 115000,
    currency: "USD",
    mileageOrHours: "3,150 Horas de Trabajo",
    engine: "Cat C7.1 ACERT Turbo Diésel (158 HP)",
    fuelType: "Diesel",
    transmission: "Hidrostática de 2 Velocidades con Freno Automático",
    drivetrain: "Orugas de Acero de 600 mm de Alta Tracción",
    location: "San Cristóbal",
    color: "Amarillo Caterpillar Original / Negro",
    featured: true,
    status: "disponible",
    description: "Equipo pesado en óptimas condiciones mecánicas, bomba hidráulica y tornamesa al 100%. Historial de servicio completo con repuestos originales Cat. Incluye cucharón de servicio pesado de 1.2 m³.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Cucharón Reforzado 1.2 m³", "Cabina ROPS Climatizada con A/C", "Sistema Telemático Cat Product Link", "Línea Húmeda para Martillo Hidráulico", "Bomba Hidráulica Doble de Pistón", "Orugas de Acero al 85% de Vida Útil"],
    specs: {
      "Peso Operativo": "21,700 kg (47,840 lbs)",
      "Profundidad Máx. Excavación": "6.72 metros (22 pies)",
      "Capacidad de Cucharón": "1.2 m³",
      "Presión sobre el Suelo": "44 kPa",
      "Tanque Hidráulico": "260 Litros"
    },
    seller: {
      name: "Maquinaria Dominicana & Equipos",
      dealerSlug: "maquinaria-dominicana",
      phone: "+1 (809) 555-0155",
      whatsapp: "18095550155",
      verified: true,
      rating: 5.0,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  },
  // 6. WATER TRANSPORT: Bowrider Boat
  {
    id: "sea-ray-spx-210-bowrider-2023",
    title: "Sea Ray SPX 210 Bowrider Lancha Deportiva 2023",
    slug: "sea-ray-spx-210-bowrider-2023",
    transportType: "water-transport",
    category: "boats",
    make: "Sea Ray",
    model: "SPX 210 Bowrider (21 Pies de Eslora)",
    year: 2023,
    condition: "certificado",
    price: 54900,
    currency: "USD",
    mileageOrHours: "85 Horas de Navegación",
    engine: "MerCruiser 4.5L MPI V6 Inboard/Outboard (250 HP)",
    fuelType: "Gasolina Marina",
    transmission: "Pata Alpha One Sterndrive",
    drivetrain: "Hélice de Acero Inoxidable de 3 Palas",
    location: "La Romana",
    color: "Azul Náutico / Blanco / Tapicería Marfil Marina",
    featured: true,
    status: "disponible",
    description: "Lancha deportiva de proa abierta ideal para recreación en Casa de Campo, Bayahíbe y Las Terrenas. Sistema de sonido marino Fusion Bluetooth, torre de wakeboard abatible, piso SeaDek de teca sintética y tráiler galvanizado incluido.",
    imageUrl: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Torre de Wakeboard con Techo Bimini", "Piso Acolchado SeaDek Antideslizante", "Sistema de Sonido Marino Fusion con 6 Bocinas", "Pantalla Simrad 7\" con GPS y Sonda Marina", "Plataforma de Baño Integrada con Escalera", "Tráiler Doble Eje Galvanizado Incluido"],
    specs: {
      "Eslora (Largo)": "6.55 m (21 pies 6 pulg)",
      "Manga (Ancho)": "2.54 m (8 pies 4 pulg)",
      "Capacidad de Personas": "10 Pasajeros Homologados",
      "Tanque de Combustible": "151 Litros (40 Galones)",
      "Calado": "0.91 m con Pata Abajo"
    },
    seller: {
      name: "Marina & Yates Quisqueya",
      dealerSlug: "nautica-caribbean-yachts",
      phone: "+1 (809) 555-0122",
      whatsapp: "18095550122",
      verified: true,
      rating: 4.9,
      dealerType: "Concesionario Oficial"
    },
    createdAt: new Date().toISOString()
  },
  // 7. MOTOTECHNICS: Hyper Naked Motorcycle
  {
    id: "yamaha-mt09-sp-hyper-naked-2024",
    title: "Yamaha MT-09 SP Hyper Naked 2024",
    slug: "yamaha-mt09-sp-hyper-naked-2024",
    transportType: "mototechnics",
    category: "coupes",
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
      dealerSlug: "superbike-rd-concesionario",
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
    category: "machinery",
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
      dealerSlug: "agroequipos-dominicana",
      phone: "+1 (809) 555-0111",
      whatsapp: "18095550111",
      verified: true,
      rating: 4.9,
      dealerType: "Dealer Autorizado"
    },
    createdAt: new Date().toISOString()
  }
];
