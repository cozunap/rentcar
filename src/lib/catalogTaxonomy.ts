// Catálogo completo de Modelos y Carrocerías por Marca de Vehículos en TuCarroYMas
// Soporta filtrado dinámico en cascada: Tipo de Transporte -> Marca -> Modelo -> Carrocería

export interface BrandCatalogMeta {
  transportTypes: string[]; // ["cars", "trucks-buses", "water-transport", "mototechnics", "machinery", "special-machinery"]
  models: string[];
  bodyStyles: { id: string; name: string }[];
}

export const BRAND_CATALOG_DATABASE: Record<string, BrandCatalogMeta> = {
  // ==========================================
  // JAPONESAS POPULARES
  // ==========================================
  Toyota: {
    transportTypes: ["cars"],
    models: ["Corolla", "Camry", "RAV4", "Hilux", "Land Cruiser / Prado", "4Runner", "Fortuner", "Yaris", "Highlander", "Tacoma", "Tundra", "Sienna", "Corolla Cross", "Crown"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "hatchback", name: "Hatchback" },
      { id: "van", name: "Van / Minivan" }
    ]
  },
  Honda: {
    transportTypes: ["cars"],
    models: ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "Fit", "Ridgeline", "Odyssey", "Passport", "City", "ZR-V"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "hatchback", name: "Hatchback" },
      { id: "van", name: "Van / Minivan" }
    ]
  },
  Nissan: {
    transportTypes: ["cars"],
    models: ["Sentra", "Altima", "Maxima", "Versa", "Kicks", "Rogue / X-Trail", "Pathfinder", "Patrol", "Frontier / Navara", "Murano", "Armada", "370Z / Z", "GT-R", "Urvan"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "hatchback", name: "Hatchback" },
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "van", name: "Van / Comercial" }
    ]
  },
  Lexus: {
    transportTypes: ["cars"],
    models: ["IS", "ES", "LS", "NX", "RX", "GX", "LX", "RC", "LC", "TX", "UX"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "deportivo", name: "Coupé / Deportivo" }
    ]
  },
  Mazda: {
    transportTypes: ["cars"],
    models: ["Mazda 2", "Mazda 3", "Mazda 6", "CX-3", "CX-30", "CX-5", "CX-50", "CX-70", "CX-90", "BT-50", "MX-5 Miata"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "hatchback", name: "Hatchback" },
      { id: "convertible", name: "Convertible / Roadster" }
    ]
  },
  Mitsubishi: {
    transportTypes: ["cars"],
    models: ["Montero / Pajero", "Montero Sport", "Outlander", "Outlander Sport", "L200 / Triton", "Eclipse Cross", "Mirage", "Attrage", "Xpander"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "hatchback", name: "Hatchback" }
    ]
  },
  Subaru: {
    transportTypes: ["cars"],
    models: ["Impreza", "WRX / STI", "Legacy", "Crosstrek / XV", "Forester", "Outback", "Ascent", "BRZ"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "wagon", name: "Station Wagon" },
      { id: "deportivo", name: "Coupé / Deportivo" }
    ]
  },
  Suzuki: {
    transportTypes: ["cars"],
    models: ["Jimny", "Grand Vitara", "Vitara", "Swift", "Baleno", "S-Cross", "Alto", "Fronx", "Ertiga"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta / 4x4" },
      { id: "hatchback", name: "Hatchback" },
      { id: "sedan", name: "Sedán" }
    ]
  },
  Isuzu: {
    transportTypes: ["cars", "trucks-buses"],
    models: ["D-Max", "MU-X", "NPR", "NQR", "Forward"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "pesado", name: "Camión Mediano / Pesado" }
    ]
  },

  // ==========================================
  // COREANAS
  // ==========================================
  Hyundai: {
    transportTypes: ["cars"],
    models: ["Sonata", "Elantra", "Accent", "Tucson", "Santa Fe", "Palisade", "Creta", "Venue", "Kona", "Staria", "H-1", "Ioniq 5"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "hatchback", name: "Hatchback" },
      { id: "van", name: "Van / Comercial" }
    ]
  },
  Kia: {
    transportTypes: ["cars"],
    models: ["K5 / Optima", "Forte / Cerato", "Rio / K3", "Sportage", "Sorento", "Telluride", "Seltos", "Soul", "Carnival", "EV6"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "hatchback", name: "Hatchback" },
      { id: "van", name: "Van / Minivan" }
    ]
  },

  // ==========================================
  // AMERICANAS
  // ==========================================
  Ford: {
    transportTypes: ["cars"],
    models: ["F-150", "F-250 Super Duty", "Ranger", "Explorer", "Expedition", "Edge", "Escape", "Bronco", "Bronco Sport", "Mustang", "Mustang Mach-E", "Transit", "Maverick"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "convertible", name: "Convertible / Cabrio" },
      { id: "van", name: "Van / Comercial" }
    ]
  },
  Chevrolet: {
    transportTypes: ["cars"],
    models: ["Silverado 1500", "Silverado 2500HD", "Colorado", "Tahoe", "Suburban", "Traverse", "Equinox", "Trailblazer", "Trax", "Blazer", "Camaro", "Corvette", "Malibu", "Express"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "sedan", name: "Sedán" },
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "convertible", name: "Convertible / Cabrio" }
    ]
  },
  Jeep: {
    transportTypes: ["cars"],
    models: ["Wrangler (2 Puertas)", "Wrangler Unlimited (4 Puertas)", "Grand Cherokee", "Grand Cherokee L", "Gladiator (Pick-up)", "Compass", "Renegade", "Wagoneer", "Grand Wagoneer"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta / 4x4" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "convertible", name: "Descapotable 4x4" }
    ]
  },
  Dodge: {
    transportTypes: ["cars"],
    models: ["Charger", "Challenger", "Durango", "Hornet"],
    bodyStyles: [
      { id: "sedan", name: "Sedán Deportivo" },
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "suv", name: "SUV / Jeepeta" }
    ]
  },
  RAM: {
    transportTypes: ["cars"],
    models: ["RAM 1500", "RAM 2500 Heavy Duty", "RAM 3500", "RAM TRX", "RAM Rampage"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" }
    ]
  },
  Cadillac: {
    transportTypes: ["cars"],
    models: ["Escalade", "Escalade ESV", "CT4", "CT5", "XT4", "XT5", "XT6", "Lyriq"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta de Lujo" },
      { id: "sedan", name: "Sedán de Lujo" }
    ]
  },
  GMC: {
    transportTypes: ["cars"],
    models: ["Sierra 1500", "Sierra 2500HD", "Yukon", "Yukon XL", "Acadia", "Terrain", "Canyon", "Hummer EV"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "suv", name: "SUV / Jeepeta" }
    ]
  },
  Tesla: {
    transportTypes: ["cars"],
    models: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"],
    bodyStyles: [
      { id: "sedan", name: "Sedán 100% Eléctrico" },
      { id: "suv", name: "SUV / Jeepeta Eléctrica" },
      { id: "camioneta", name: "Camioneta / Pick-up Eléctrica" }
    ]
  },

  // ==========================================
  // EUROPEAS DE PRESTIGIO
  // ==========================================
  "Mercedes-Benz": {
    transportTypes: ["cars"],
    models: ["Clase C", "Clase E", "Clase S", "Clase A", "CLA", "GLA", "GLB", "GLC", "GLE", "GLS", "Clase G (G-Wagon)", "AMG GT", "EQE", "EQS", "Sprinter"],
    bodyStyles: [
      { id: "sedan", name: "Sedán de Lujo" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "convertible", name: "Cabriolet" },
      { id: "van", name: "Van / Minibús" }
    ]
  },
  BMW: {
    transportTypes: ["cars", "mototechnics"],
    models: ["Serie 3", "Serie 4", "Serie 5", "Serie 7", "Serie 2", "X1", "X3", "X4", "X5", "X6", "X7", "M2", "M3", "M4", "M5", "Z4", "i4", "iX", "R 1250 GS (Moto)", "R 1300 GS (Moto)", "S 1000 RR (Moto)"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / SAV" },
      { id: "deportivo", name: "Coupé Deportivo" },
      { id: "convertible", name: "Convertible / Cabrio" },
      { id: "motos", name: "Motocicleta BMW" }
    ]
  },
  Audi: {
    transportTypes: ["cars"],
    models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "RS3", "RS5", "RS6", "RS7", "RS Q8", "e-tron GT"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "deportivo", name: "Coupé / Sportback" },
      { id: "wagon", name: "Station Wagon / Avant" }
    ]
  },
  Volkswagen: {
    transportTypes: ["cars"],
    models: ["Jetta", "Golf / GTI", "Passat", "Tiguan", "Atlas", "Taos", "T-Cross", "Amarok", "ID.4"],
    bodyStyles: [
      { id: "sedan", name: "Sedán" },
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "hatchback", name: "Hatchback" },
      { id: "camioneta", name: "Camioneta / Pick-up" }
    ]
  },
  Porsche: {
    transportTypes: ["cars"],
    models: ["911 Carrera / Turbo / GT3", "Cayenne", "Macan", "Panamera", "Taycan", "718 Cayman", "718 Boxster"],
    bodyStyles: [
      { id: "deportivo", name: "Coupé / Deportivo" },
      { id: "suv", name: "SUV / Jeepeta de Alto Rendimiento" },
      { id: "sedan", name: "Sedán Deportivo" },
      { id: "convertible", name: "Convertible / Cabriolet" }
    ]
  },
  "Land Rover": {
    transportTypes: ["cars"],
    models: ["Range Rover", "Range Rover Sport", "Range Rover Velar", "Range Rover Evoque", "Defender 90", "Defender 110", "Defender 130", "Discovery", "Discovery Sport"],
    bodyStyles: [
      { id: "suv", name: "SUV / Todoterreno de Lujo" }
    ]
  },
  Jaguar: {
    transportTypes: ["cars"],
    models: ["F-Pace", "E-Pace", "I-Pace", "F-Type", "XE", "XF"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "sedan", name: "Sedán" },
      { id: "deportivo", name: "Coupé / Deportivo" }
    ]
  },
  Volvo: {
    transportTypes: ["cars"],
    models: ["XC90", "XC60", "XC40", "EX30", "EX90", "S60", "S90", "V60", "V90"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "sedan", name: "Sedán" },
      { id: "wagon", name: "Station Wagon" }
    ]
  },
  Peugeot: {
    transportTypes: ["cars"],
    models: ["208", "308", "2008", "3008", "5008", "Partner", "Landtrek"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "hatchback", name: "Hatchback" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "van", name: "Van Comercial" }
    ]
  },
  Renault: {
    transportTypes: ["cars"],
    models: ["Duster", "Koleos", "Kwid", "Stepway", "Logan", "Oroch", "Master"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "hatchback", name: "Hatchback" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "sedan", name: "Sedán" }
    ]
  },
  Ferrari: {
    transportTypes: ["cars"],
    models: ["296 GTB / GTS", "SF90 Stradale", "F8 Tributo", "Roma", "Portofino M", "Purosangue", "812 Superfast", "488 Pista"],
    bodyStyles: [
      { id: "deportivo", name: "Superdeportivo Coupé" },
      { id: "convertible", name: "Spider / Convertible" },
      { id: "suv", name: "SUV Deportivo de Ultra Lujo" }
    ]
  },
  Lamborghini: {
    transportTypes: ["cars"],
    models: ["Urus", "Huracán EVO / STO / Tecnica", "Revuelto", "Aventador", "Temerario"],
    bodyStyles: [
      { id: "suv", name: "Super SUV" },
      { id: "deportivo", name: "Superdeportivo Coupé" },
      { id: "convertible", name: "Spyder / Roadster" }
    ]
  },
  Maserati: {
    transportTypes: ["cars"],
    models: ["Grecale", "Levante", "Ghibli", "Quattroporte", "MC20", "GranTurismo"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta de Lujo" },
      { id: "sedan", name: "Sedán de Lujo" },
      { id: "deportivo", name: "Coupé / Deportivo" }
    ]
  },

  // ==========================================
  // MARCAS CHINAS LÍDERES
  // ==========================================
  BYD: {
    transportTypes: ["cars"],
    models: ["Song Plus DM-i", "Tang EV", "Han EV", "Yuan Plus / Atto 3", "Dolphin", "Seal", "Seagull / Dolphin Mini", "Shark (Pick-up Híbrida)", "Song Pro"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta (EV / Híbrida)" },
      { id: "sedan", name: "Sedán 100% Eléctrico" },
      { id: "hatchback", name: "Hatchback Eléctrico" },
      { id: "camioneta", name: "Camioneta / Pick-up Híbrida" }
    ]
  },
  Changan: {
    transportTypes: ["cars"],
    models: ["CS35 Plus", "CS55 Plus", "CS75 Plus", "CS85 Coupe", "UNI-T", "UNI-K", "UNI-V", "Hunter (Pick-up)", "Alsvin"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "sedan", name: "Sedán" },
      { id: "camioneta", name: "Camioneta / Pick-up" }
    ]
  },
  Geely: {
    transportTypes: ["cars"],
    models: ["Coolray", "Monjaro", "Starray", "Tugella", "Okavango", "Emgrand", "Geometry C"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "sedan", name: "Sedán" }
    ]
  },
  Chery: {
    transportTypes: ["cars"],
    models: ["Tiggo 2 Pro", "Tiggo 4 Pro", "Tiggo 7 Pro", "Tiggo 8 Pro", "Arrizo 6 Pro", "Arrizo 8"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta" },
      { id: "sedan", name: "Sedán" }
    ]
  },
  Haval: {
    transportTypes: ["cars"],
    models: ["Jolion", "H6", "H6 GT", "Dargo", "H9"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta 4x4" }
    ]
  },
  "GWM (Great Wall)": {
    transportTypes: ["cars"],
    models: ["Poer / Cannon", "Wingle 5", "Wingle 7", "Tank 300", "Tank 500", "Ora 03"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "suv", name: "Todoterreno 4x4" },
      { id: "hatchback", name: "Hatchback EV" }
    ]
  },
  Jetour: {
    transportTypes: ["cars"],
    models: ["X70", "X70 Plus", "X90 Plus", "Dashing", "T2 (Traveller 4x4)"],
    bodyStyles: [
      { id: "suv", name: "SUV / Jeepeta" }
    ]
  },
  "JAC Motors": {
    transportTypes: ["cars", "trucks-buses"],
    models: ["JS2", "JS4", "JS6", "JS8", "T6 Pick-up", "T8 Pro Pick-up", "Sunray Van", "HFC 1035 Camión"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "van", name: "Van Comercial" },
      { id: "pesado", name: "Camión Liviano" }
    ]
  },
  Foton: {
    transportTypes: ["cars", "trucks-buses"],
    models: ["Tunland G7 / G9", "View Minibús", "Aumark", "Auman 18-Wheeler", "Ollin"],
    bodyStyles: [
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "van", name: "Minibús / Pasajeros" },
      { id: "pesado", name: "Camión / Cabezote 18-Wheeler" }
    ]
  },
  Dongfeng: {
    transportTypes: ["cars", "trucks-buses"],
    models: ["T5 EVO", "AX7", "Rich 6 Pick-up", "Captain Camión", "Tianjin"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "camioneta", name: "Camioneta / Pick-up" },
      { id: "pesado", name: "Camión de Carga" }
    ]
  },
  BAIC: {
    transportTypes: ["cars"],
    models: ["BJ40 Plus (4x4)", "BJ60", "X35", "X55 II", "X7"],
    bodyStyles: [
      { id: "suv", name: "SUV / Todoterreno 4x4" }
    ]
  },
  "GAC Motor": {
    transportTypes: ["cars"],
    models: ["GS3 Emzoom", "GS4", "GS8", "Emkoo", "Empow"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "sedan", name: "Sedán Deportivo" }
    ]
  },
  Forthing: {
    transportTypes: ["cars"],
    models: ["T5 EVO", "U-Tour", "Friday EV"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "van", name: "Monovolumen Familiar" }
    ]
  },
  Shineray: {
    transportTypes: ["cars", "trucks-buses"],
    models: ["SWM G01", "X30 Miniván", "T30 Camioncito"],
    bodyStyles: [
      { id: "suv", name: "SUV / Crossover" },
      { id: "van", name: "Miniván de Carga" }
    ]
  },

  // ==========================================
  // CAMIONES & 18-WHEELERS (PESADOS)
  // ==========================================
  Freightliner: {
    transportTypes: ["trucks-buses"],
    models: ["Cascadia 126 Sleeper", "Cascadia Day Cab", "M2 106", "M2 112", "Coronado", "Columbia"],
    bodyStyles: [
      { id: "pesado", name: "Cabezote / 18-Wheeler" },
      { id: "camion", name: "Camión Chasis / Volqueta" }
    ]
  },
  Mack: {
    transportTypes: ["trucks-buses"],
    models: ["Anthem", "Pinnacle", "Granite (Volqueta / Mixer)", "MD Series"],
    bodyStyles: [
      { id: "pesado", name: "Cabezote / 18-Wheeler" },
      { id: "camion", name: "Volqueta / Camión Pesado" }
    ]
  },
  Scania: {
    transportTypes: ["trucks-buses"],
    models: ["Serie R (R450, R500)", "Serie S (S500, S650)", "Serie G", "Serie P"],
    bodyStyles: [
      { id: "pesado", name: "Cabezote 18-Wheeler Europeo" },
      { id: "camion", name: "Camión Rígido de Distribución" }
    ]
  },
  MAN: {
    transportTypes: ["trucks-buses"],
    models: ["TGX 18-Wheeler", "TGS Volqueta", "TGM", "TGL"],
    bodyStyles: [
      { id: "pesado", name: "Cabezote / Tractocamión" },
      { id: "camion", name: "Camión Volqueta / Construcción" }
    ]
  },

  // ==========================================
  // MAQUINARIA PESADA & AGRÍCOLA
  // ==========================================
  Caterpillar: {
    transportTypes: ["special-machinery", "machinery"],
    models: ["320D Excavadora Hidráulica", "330 Excavadora", "416 Retroexcavadora", "420 Retroexcavadora", "950 Cargador Frontal", "D6 Bulldozer", "D8T Bulldozer", "140M Motoniveladora", "CS54B Rodillo Compactador"],
    bodyStyles: [
      { id: "maquinaria", name: "Excavadora sobre Orugas" },
      { id: "retroexcavadora", name: "Retroexcavadora" },
      { id: "pala", name: "Cargador Frontal" },
      { id: "tractor", name: "Bulldozer / Tractor de Orugas" },
      { id: "pesado", name: "Equipo Vial y Compactación" }
    ]
  },
  "John Deere": {
    transportTypes: ["machinery", "special-machinery"],
    models: ["6120M Tractor Agrícola", "6155M Tractor", "5075E Tractor", "8R 410 Tractor de Alta Potencia", "310SL Retroexcavadora", "210G Excavadora", "670G Motoniveladora"],
    bodyStyles: [
      { id: "tractor", name: "Tractor Agrícola con Cabina" },
      { id: "retroexcavadora", name: "Retroexcavadora Industrial" },
      { id: "maquinaria", name: "Excavadora / Movimiento de Tierra" }
    ]
  },
  Komatsu: {
    transportTypes: ["special-machinery", "machinery"],
    models: ["PC200 Excavadora", "PC300 Excavadora", "WA380 Cargador Frontal", "D65EX Bulldozer", "GD655 Motoniveladora"],
    bodyStyles: [
      { id: "maquinaria", name: "Excavadora Hidráulica" },
      { id: "pala", name: "Cargador sobre Ruedas" },
      { id: "tractor", name: "Tractor de Cadenas" }
    ]
  },

  // ==========================================
  // EMBARCACIONES & BOTES (TRANSPORTE ACUÁTICO)
  // ==========================================
  "Sea Ray": {
    transportTypes: ["water-transport"],
    models: ["SPX 190 Bowrider", "SPX 210 Bowrider", "SDX 250", "Sundancer 320", "SLX 350", "Sundancer 370"],
    bodyStyles: [
      { id: "boats", name: "Lancha Deportiva Bowrider" },
      { id: "crucero", name: "Yate / Crucero Recreativo" }
    ]
  },
  "Boston Whaler": {
    transportTypes: ["water-transport"],
    models: ["Montauk 170", "Dauntless 210", "Outrage 250", "Outrage 330", "Conquest 325"],
    bodyStyles: [
      { id: "boats", name: "Bote de Pesca / Consola Central" },
      { id: "crucero", name: "Embarcación Cabina Cerrada" }
    ]
  },

  // ==========================================
  // MOTOCICLETAS & MOTOTÉCNICA
  // ==========================================
  Yamaha: {
    transportTypes: ["mototechnics"],
    models: ["MT-03", "MT-07", "MT-09 SP", "YZF-R3", "YZF-R7", "YZF-R1", "Ténéré 700", "NMAX 155", "Crypton 115", "YZ450F Motocross"],
    bodyStyles: [
      { id: "motos", name: "Moto Naked / Hyper Naked" },
      { id: "deportivo", name: "Superdeportiva Pista" },
      { id: "scooter", name: "Scooter / Urbana" },
      { id: "trail", name: "Trail / Aventura 4x2" }
    ]
  },
  Kawasaki: {
    transportTypes: ["mototechnics"],
    models: ["Ninja 400", "Ninja 650", "Ninja ZX-6R", "Ninja ZX-10R", "Z400", "Z650", "Z900", "Versys 650", "KX250"],
    bodyStyles: [
      { id: "deportivo", name: "Superdeportiva Ninja" },
      { id: "motos", name: "Naked Z Series" },
      { id: "trail", name: "Dual Sport / Trail" }
    ]
  },
  Ducati: {
    transportTypes: ["mototechnics"],
    models: ["Panigale V2", "Panigale V4", "Monster", "Streetfighter V4", "Multistrada V4", "Diavel V4", "Scrambler"],
    bodyStyles: [
      { id: "deportivo", name: "Superbike Deportiva" },
      { id: "motos", name: "Naked Italiana" },
      { id: "trail", name: "Maxi-Trail Aventura" }
    ]
  },
  KTM: {
    transportTypes: ["mototechnics"],
    models: ["Duke 390", "Duke 790", "Duke 890 R", "Super Duke 1290 R", "390 Adventure", "890 Adventure R", "300 EXC Enduro"],
    bodyStyles: [
      { id: "motos", name: "Naked Duke" },
      { id: "trail", name: "Adventure / Enduro" }
    ]
  },
  "Harley-Davidson": {
    transportTypes: ["mototechnics"],
    models: ["Iron 883", "Forty-Eight", "Fat Boy 114", "Street Glide Special", "Road Glide", "Pan America 1250", "Sportster S"],
    bodyStyles: [
      { id: "cruiser", name: "Custom / Cruiser" },
      { id: "touring", name: "Touring / Gran Turismo" },
      { id: "trail", name: "Aventura Trail" }
    ]
  }
};
