// Comprehensive Database of Vehicle & Equipment Brands sold in Dominican Republic
// All logos are stored locally in /brands/*.svg to ensure 100% availability with 0 broken images.

export interface BrandItem {
  id: string;
  name: string;
  country: string;
  category: "autos" | "pesados" | "maquinaria" | "motos" | "chinas";
  logo: string;
}

export const ALL_DOMINICAN_BRANDS: BrandItem[] = [
  // ==========================================
  // 1. MARCAS CHINAS LÍDERES EN REP. DOMINICANA (Gran auge actual)
  // ==========================================
  {
    id: "byd",
    name: "BYD",
    country: "China",
    category: "chinas",
    logo: "/brands/byd.svg"
  },
  {
    id: "changan",
    name: "Changan",
    country: "China",
    category: "chinas",
    logo: "/brands/changan.svg"
  },
  {
    id: "geely",
    name: "Geely",
    country: "China",
    category: "chinas",
    logo: "/brands/geely.svg"
  },
  {
    id: "chery",
    name: "Chery",
    country: "China",
    category: "chinas",
    logo: "/brands/chery.svg"
  },
  {
    id: "haval",
    name: "Haval",
    country: "China",
    category: "chinas",
    logo: "/brands/haval.svg"
  },
  {
    id: "gwm",
    name: "GWM (Great Wall)",
    country: "China",
    category: "chinas",
    logo: "/brands/gwm.svg"
  },
  {
    id: "jetour",
    name: "Jetour",
    country: "China",
    category: "chinas",
    logo: "/brands/jetour.svg"
  },
  {
    id: "jac",
    name: "JAC Motors",
    country: "China",
    category: "chinas",
    logo: "/brands/jac.svg"
  },
  {
    id: "foton",
    name: "Foton",
    country: "China",
    category: "chinas",
    logo: "/brands/foton.svg"
  },
  {
    id: "dongfeng",
    name: "Dongfeng",
    country: "China",
    category: "chinas",
    logo: "/brands/dongfeng.svg"
  },
  {
    id: "baic",
    name: "BAIC",
    country: "China",
    category: "chinas",
    logo: "/brands/baic.svg"
  },
  {
    id: "gac",
    name: "GAC Motor",
    country: "China",
    category: "chinas",
    logo: "/brands/gac.svg"
  },
  {
    id: "forthing",
    name: "Forthing",
    country: "China",
    category: "chinas",
    logo: "/brands/forthing.svg"
  },
  {
    id: "shineray",
    name: "Shineray",
    country: "China",
    category: "chinas",
    logo: "/brands/shineray.svg"
  },

  // ==========================================
  // 2. JAPONESAS (Líderes de Mercado en RD)
  // ==========================================
  {
    id: "toyota",
    name: "Toyota",
    country: "Japón",
    category: "autos",
    logo: "/brands/toyota.svg"
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japón",
    category: "autos",
    logo: "/brands/honda.svg"
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japón",
    category: "autos",
    logo: "/brands/nissan.svg"
  },
  {
    id: "lexus",
    name: "Lexus",
    country: "Japón",
    category: "autos",
    logo: "/brands/lexus.svg"
  },
  {
    id: "mazda",
    name: "Mazda",
    country: "Japón",
    category: "autos",
    logo: "/brands/mazda.svg"
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    country: "Japón",
    category: "autos",
    logo: "/brands/mitsubishi.svg"
  },
  {
    id: "subaru",
    name: "Subaru",
    country: "Japón",
    category: "autos",
    logo: "/brands/subaru.svg"
  },
  {
    id: "suzuki",
    name: "Suzuki",
    country: "Japón",
    category: "autos",
    logo: "/brands/suzuki.svg"
  },
  {
    id: "isuzu",
    name: "Isuzu",
    country: "Japón",
    category: "autos",
    logo: "/brands/isuzu.svg"
  },

  // ==========================================
  // 3. COREANAS
  // ==========================================
  {
    id: "hyundai",
    name: "Hyundai",
    country: "Corea del Sur",
    category: "autos",
    logo: "/brands/hyundai.svg"
  },
  {
    id: "kia",
    name: "Kia",
    country: "Corea del Sur",
    category: "autos",
    logo: "/brands/kia.svg"
  },

  // ==========================================
  // 4. AMERICANAS
  // ==========================================
  {
    id: "ford",
    name: "Ford",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/ford.svg"
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/chevrolet.svg"
  },
  {
    id: "jeep",
    name: "Jeep",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/jeep.svg"
  },
  {
    id: "dodge",
    name: "Dodge",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/dodge.svg"
  },
  {
    id: "ram",
    name: "RAM",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/ram.svg"
  },
  {
    id: "cadillac",
    name: "Cadillac",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/cadillac.svg"
  },
  {
    id: "gmc",
    name: "GMC",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/gmc.svg"
  },
  {
    id: "tesla",
    name: "Tesla",
    country: "Estados Unidos",
    category: "autos",
    logo: "/brands/tesla.svg"
  },

  // ==========================================
  // 5. EUROPEAS (Alemania, Suecia, Reino Unido, Francia, Italia)
  // ==========================================
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    country: "Alemania",
    category: "autos",
    logo: "/brands/mercedes.svg"
  },
  {
    id: "bmw",
    name: "BMW",
    country: "Alemania",
    category: "autos",
    logo: "/brands/bmw.svg"
  },
  {
    id: "audi",
    name: "Audi",
    country: "Alemania",
    category: "autos",
    logo: "/brands/audi.svg"
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Alemania",
    category: "autos",
    logo: "/brands/volkswagen.svg"
  },
  {
    id: "porsche",
    name: "Porsche",
    country: "Alemania",
    category: "autos",
    logo: "/brands/porsche.svg"
  },
  {
    id: "land-rover",
    name: "Land Rover",
    country: "Reino Unido",
    category: "autos",
    logo: "/brands/landrover.svg"
  },
  {
    id: "jaguar",
    name: "Jaguar",
    country: "Reino Unido",
    category: "autos",
    logo: "/brands/jaguar.svg"
  },
  {
    id: "volvo",
    name: "Volvo",
    country: "Suecia",
    category: "autos",
    logo: "/brands/volvo.svg"
  },
  {
    id: "peugeot",
    name: "Peugeot",
    country: "Francia",
    category: "autos",
    logo: "/brands/peugeot.svg"
  },
  {
    id: "renault",
    name: "Renault",
    country: "Francia",
    category: "autos",
    logo: "/brands/renault.svg"
  },
  {
    id: "ferrari",
    name: "Ferrari",
    country: "Italia",
    category: "autos",
    logo: "/brands/ferrari.svg"
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    country: "Italia",
    category: "autos",
    logo: "/brands/lamborghini.svg"
  },
  {
    id: "maserati",
    name: "Maserati",
    country: "Italia",
    category: "autos",
    logo: "/brands/maserati.svg"
  },

  // ==========================================
  // 6. CAMIONES PESADOS & 18-WHEELERS
  // ==========================================
  {
    id: "freightliner",
    name: "Freightliner",
    country: "Estados Unidos",
    category: "pesados",
    logo: "/brands/mercedes.svg"
  },
  {
    id: "mack",
    name: "Mack",
    country: "Estados Unidos",
    category: "pesados",
    logo: "/brands/volvo.svg"
  },
  {
    id: "scania",
    name: "Scania",
    country: "Suecia",
    category: "pesados",
    logo: "/brands/scania.svg"
  },
  {
    id: "man",
    name: "MAN",
    country: "Alemania",
    category: "pesados",
    logo: "/brands/man.svg"
  },

  // ==========================================
  // 7. MAQUINARIA PESADA Y AGRÍCOLA
  // ==========================================
  {
    id: "caterpillar",
    name: "Caterpillar",
    country: "Estados Unidos",
    category: "maquinaria",
    logo: "/brands/caterpillar.svg"
  },
  {
    id: "john-deere",
    name: "John Deere",
    country: "Estados Unidos",
    category: "maquinaria",
    logo: "/brands/johndeere.svg"
  },
  {
    id: "komatsu",
    name: "Komatsu",
    country: "Japón",
    category: "maquinaria",
    logo: "/brands/komatsu.svg"
  },

  // ==========================================
  // 8. MOTOCICLETAS
  // ==========================================
  {
    id: "yamaha",
    name: "Yamaha",
    country: "Japón",
    category: "motos",
    logo: "/brands/yamaha.svg"
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    country: "Japón",
    category: "motos",
    logo: "/brands/kawasaki.svg"
  },
  {
    id: "ducati",
    name: "Ducati",
    country: "Italia",
    category: "motos",
    logo: "/brands/ducati.svg"
  },
  {
    id: "ktm",
    name: "KTM",
    country: "Austria",
    category: "motos",
    logo: "/brands/ktm.svg"
  },
  {
    id: "harley-davidson",
    name: "Harley-Davidson",
    country: "Estados Unidos",
    category: "motos",
    logo: "/brands/harley-davidson.svg"
  },
  {
    id: "bmw-motorrad",
    name: "BMW Motorrad",
    country: "Alemania",
    category: "motos",
    logo: "/brands/bmw.svg"
  }
];
