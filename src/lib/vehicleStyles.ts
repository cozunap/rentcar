export interface VehicleStyleItem {
  id: string;
  name: string;
  nameEs: string;
  image: string;
}

export const VEHICLE_STYLES: VehicleStyleItem[] = [
  {
    "id": "sedans",
    "name": "Sedans",
    "nameEs": "Sedanes",
    "image": "/styles/sedans.svg"
  },
  {
    "id": "suvs",
    "name": "SUVs & Crossovers",
    "nameEs": "SUVs & Crossovers",
    "image": "/styles/suvs.svg"
  },
  {
    "id": "trucks",
    "name": "Trucks",
    "nameEs": "Camionetas / Pick-ups",
    "image": "/styles/trucks.svg"
  },
  {
    "id": "commercial",
    "name": "Commercial",
    "nameEs": "Comerciales & Vans",
    "image": "/styles/commercial.svg"
  },
  {
    "id": "boats",
    "name": "Boats & Marine",
    "nameEs": "Botes & Embarcaciones",
    "image": "/styles/boats.svg"
  },
  {
    "id": "coupes",
    "name": "Coupes",
    "nameEs": "Coupés Deportivos",
    "image": "/styles/coupes.svg"
  },
  {
    "id": "hatchbacks",
    "name": "Hatchbacks",
    "nameEs": "Hatchbacks",
    "image": "/styles/hatchbacks.svg"
  },
  {
    "id": "vans",
    "name": "Vans & Minivans",
    "nameEs": "Vans & Minivans",
    "image": "/styles/vans.svg"
  },
  {
    "id": "convertibles",
    "name": "Convertibles",
    "nameEs": "Convertibles / Cabrio",
    "image": "/styles/convertibles.svg"
  },
  {
    "id": "wagons",
    "name": "Wagons",
    "nameEs": "Station Wagons",
    "image": "/styles/wagons.svg"
  },
  {
    "id": "4wds",
    "name": "AWDs & 4WDs",
    "nameEs": "4x4s & Todo Terreno",
    "image": "/styles/4wds.svg"
  },
  {
    "id": "hybrids",
    "name": "Hybrids",
    "nameEs": "Híbridos (Gas / Elec)",
    "image": "/styles/hybrids.svg"
  },
  {
    "id": "electrics",
    "name": "Electrics",
    "nameEs": "100% Eléctricos (EV)",
    "image": "/styles/electrics.svg"
  }
];
