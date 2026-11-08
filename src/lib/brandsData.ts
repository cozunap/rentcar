// Comprehensive Database of Vehicle & Equipment Brands sold in Dominican Republic with reliable SVG logos

export interface BrandItem {
  id: string;
  name: string;
  country: string;
  category: "autos" | "pesados" | "maquinaria" | "motos" | "marino";
  logo: string;
}

export const ALL_DOMINICAN_BRANDS: BrandItem[] = [
  // 1. Japonesas (Líderes en RD)
  {
    id: "toyota",
    name: "Toyota",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/toyota.svg"
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/honda.svg"
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nissan.svg"
  },
  {
    id: "lexus",
    name: "Lexus",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/lexus.svg"
  },
  {
    id: "mazda",
    name: "Mazda",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mazda.svg"
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mitsubishi.svg"
  },
  {
    id: "subaru",
    name: "Subaru",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/subaru.svg"
  },
  {
    id: "suzuki",
    name: "Suzuki",
    country: "Japón",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/suzuki.svg"
  },
  {
    id: "isuzu",
    name: "Isuzu",
    country: "Japón",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/isuzu.svg"
  },

  // 2. Coreanas (Gran cuota en RD)
  {
    id: "hyundai",
    name: "Hyundai",
    country: "Corea del Sur",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/hyundai.svg"
  },
  {
    id: "kia",
    name: "Kia",
    country: "Corea del Sur",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kia.svg"
  },

  // 3. Americanas
  {
    id: "ford",
    name: "Ford",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ford.svg"
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/chevrolet.svg"
  },
  {
    id: "jeep",
    name: "Jeep",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jeep.svg"
  },
  {
    id: "dodge",
    name: "Dodge",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/dodge.svg"
  },
  {
    id: "ram",
    name: "RAM",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ram.svg"
  },
  {
    id: "cadillac",
    name: "Cadillac",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cadillac.svg"
  },
  {
    id: "gmc",
    name: "GMC",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmc.svg"
  },
  {
    id: "tesla",
    name: "Tesla",
    country: "Estados Unidos",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tesla.svg"
  },

  // 4. Europeas (Alemanas, Inglesas, Italianas)
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    country: "Alemania",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mercedes.svg"
  },
  {
    id: "bmw",
    name: "BMW",
    country: "Alemania",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/bmw.svg"
  },
  {
    id: "audi",
    name: "Audi",
    country: "Alemania",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/audi.svg"
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Alemania",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/volkswagen.svg"
  },
  {
    id: "porsche",
    name: "Porsche",
    country: "Alemania",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/porsche.svg"
  },
  {
    id: "land-rover",
    name: "Land Rover",
    country: "Reino Unido",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/landrover.svg"
  },
  {
    id: "jaguar",
    name: "Jaguar",
    country: "Reino Unido",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jaguar.svg"
  },
  {
    id: "volvo",
    name: "Volvo",
    country: "Suecia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/volvo.svg"
  },
  {
    id: "peugeot",
    name: "Peugeot",
    country: "Francia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/peugeot.svg"
  },
  {
    id: "renault",
    name: "Renault",
    country: "Francia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/renault.svg"
  },
  {
    id: "ferrari",
    name: "Ferrari",
    country: "Italia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ferrari.svg"
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    country: "Italia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/lamborghini.svg"
  },
  {
    id: "maserati",
    name: "Maserati",
    country: "Italia",
    category: "autos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/maserati.svg"
  },

  // 5. Camiones Pesados & 18-Wheelers
  {
    id: "freightliner",
    name: "Freightliner",
    country: "Estados Unidos",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mercedes.svg" // Daimler Truck Group
  },
  {
    id: "mack",
    name: "Mack",
    country: "Estados Unidos",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/volvo.svg" // Volvo Group
  },
  {
    id: "international",
    name: "International",
    country: "Estados Unidos",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/scania.svg" // Navistar
  },
  {
    id: "scania",
    name: "Scania",
    country: "Suecia",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/scania.svg"
  },
  {
    id: "man",
    name: "MAN",
    country: "Alemania",
    category: "pesados",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/man.svg"
  },

  // 6. Maquinaria Especial y Agrícola
  {
    id: "caterpillar",
    name: "Caterpillar",
    country: "Estados Unidos",
    category: "maquinaria",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/caterpillar.svg"
  },
  {
    id: "john-deere",
    name: "John Deere",
    country: "Estados Unidos",
    category: "maquinaria",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/johndeere.svg"
  },
  {
    id: "komatsu",
    name: "Komatsu",
    country: "Japón",
    category: "maquinaria",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/komatsu.svg"
  },

  // 7. Motocicletas
  {
    id: "yamaha",
    name: "Yamaha",
    country: "Japón",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/yamaha.svg"
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    country: "Japón",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kawasaki.svg"
  },
  {
    id: "ducati",
    name: "Ducati",
    country: "Italia",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ducati.svg"
  },
  {
    id: "ktm",
    name: "KTM",
    country: "Austria",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ktm.svg"
  },
  {
    id: "harley-davidson",
    name: "Harley-Davidson",
    country: "Estados Unidos",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/harleydavidson.svg"
  },
  {
    id: "bmw-motorrad",
    name: "BMW Motorrad",
    country: "Alemania",
    category: "motos",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/bmw.svg"
  }
];
