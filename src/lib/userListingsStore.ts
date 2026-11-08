// Unified Client Store for Live Published Vehicles and Dealer Landing Pages
// Combines default demo seed data with dynamically user-published vehicles and dealer profiles

import { DEMO_VEHICLES_SEED } from "./carDealerSeed.ts";
import type { DealershipListing } from "./carDealerData.ts";

export const USER_PUBLICATIONS_STORAGE_KEY = "tucarroymas_user_published_vehicles_v1";
export const DEALERS_STORAGE_KEY = "tucarroymas_registered_dealers_v1";

export interface DealerProfile {
  slug: string;
  name: string;
  dealerType: string; // e.g. "Dealer Oficial Autorizado" or "Concesionario Multimarca"
  phone: string;
  whatsapp: string;
  email?: string;
  location: string;
  bio?: string;
  logoUrl?: string;
  bannerUrl?: string;
  verified: boolean;
  website?: string;
  createdAt: string;
}

// Default Seed Dealers
export const SEED_DEALERS: DealerProfile[] = [
  {
    slug: "auto-plaza-premium-motors",
    name: "Auto Plaza Premium Motors",
    dealerType: "Concesionario Autorizado Multimarca",
    phone: "+1 (829) 555-0199",
    whatsapp: "18295550199",
    location: "Distrito Nacional",
    bio: "Más de 15 años de trayectoria ofreciendo vehículos seminuevos certificados en Santo Domingo. Garantía por escrito, financiamiento con todos los bancos y trato premium.",
    logoUrl: "/brands/toyota.svg",
    bannerUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2023-11-20"
  },
  {
    slug: "ev-dominicana-concesionario",
    name: "EV Dominicana Concesionario",
    dealerType: "Especialistas en Movilidad 100% Eléctrica",
    phone: "+1 (809) 555-0144",
    whatsapp: "18095550144",
    location: "Distrito Nacional",
    bio: "Pioneros en importación, venta y servicio técnico para vehículos eléctricos Tesla y BYD en República Dominicana con cargadores de alta velocidad.",
    logoUrl: "/brands/tesla.svg",
    bannerUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-01-10"
  },
  {
    slug: "cibao-motors-concesionario",
    name: "Cibao Motors Concesionario",
    dealerType: "Agencia Multimarca Santiago",
    phone: "+1 (849) 555-0188",
    whatsapp: "18495550188",
    location: "Santiago",
    bio: "El inventario más grande de SUVs y camionetas en la zona norte: Toyota RAV4, Hilux, Honda CR-V y Nissan Frontier con facilidades de intercambio.",
    logoUrl: "/brands/honda.svg",
    bannerUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2023-10-05"
  },
  {
    slug: "agroequipos-dominicana",
    name: "AgroEquipos Dominicana",
    dealerType: "Distribuidor Oficial John Deere RD",
    phone: "(809) 588-4422",
    whatsapp: "8295884422",
    location: "Duarte",
    bio: "Líder en venta de maquinaria agrícola e industrial, tractores John Deere certificados y repuestos genuinos con taller móvil en toda la República Dominicana.",
    logoUrl: "/brands/johndeere.svg",
    bannerUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-01-15"
  },
  {
    slug: "nautica-caribbean-yachts",
    name: "Náutica Caribbean Yachts",
    dealerType: "Marina & Brokerage Oficial",
    phone: "(809) 555-8899",
    whatsapp: "8295558899",
    location: "La Altagracia",
    bio: "Venta y consignación de lanchas deportivas Sea Ray, yates de lujo, botes de pesca deportiva y mantenimiento de motores fuera de borda en Casa de Campo y Punta Cana.",
    logoUrl: "/brands/searay.svg",
    bannerUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-02-10"
  },
  {
    slug: "transpesados-del-caribe",
    name: "TransPesados del Caribe",
    dealerType: "Importador de Cabezotes y Equipo Pesado",
    phone: "(809) 560-3344",
    whatsapp: "8295603344",
    location: "Santo Domingo",
    bio: "Especialistas en cabezotes 18-wheelers Freightliner, Mack y excavadoras Caterpillar para minería y construcción civil en República Dominicana.",
    logoUrl: "/brands/freightliner.svg",
    bannerUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-03-01"
  },
  {
    slug: "superbike-rd-concesionario",
    name: "SuperBike RD Concesionario",
    dealerType: "Distribuidor Oficial Motocicletas y Cuadras",
    phone: "+1 (809) 555-7711",
    whatsapp: "18095557711",
    location: "Distrito Nacional",
    bio: "Tu concesionario premier de motocicletas de alta cilindrada Yamaha, Honda y KTM en Santo Domingo. Cascos, indumentaria y financiamiento inmediato.",
    logoUrl: "/brands/yamaha.svg",
    bannerUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-02-01"
  },
  {
    slug: "maquinaria-dominicana",
    name: "Maquinaria Dominicana & Equipos",
    dealerType: "Importador de Maquinaria Pesada",
    phone: "+1 (809) 555-9922",
    whatsapp: "18095559922",
    location: "Santo Domingo Este",
    bio: "Maquinaria pesada para minería, infraestructura vial y movimiento de tierra. Excavadoras Caterpillar, Komatsu y retroexcavadoras con respaldo de repuestos.",
    logoUrl: "/brands/caterpillar.svg",
    bannerUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80",
    verified: true,
    createdAt: "2024-01-20"
  }
];

export function getStoredUserVehicles(): DealershipListing[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USER_PUBLICATIONS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading stored user publications:", e);
    return [];
  }
}

export function saveUserVehicle(vehicle: DealershipListing): boolean {
  if (typeof window === "undefined") return false;
  try {
    const existing = getStoredUserVehicles();
    // Guardar nuevo al principio
    const updated = [vehicle, ...existing];
    localStorage.setItem(USER_PUBLICATIONS_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error("Error saving user vehicle publication:", e);
    return false;
  }
}

export function getAllCombinedVehicles(): DealershipListing[] {
  const userPublished = getStoredUserVehicles();
  // El usuario ve sus vehículos publicados inmediatamente junto a las semillas
  return [...userPublished, ...DEMO_VEHICLES_SEED];
}

export function getStoredDealers(): DealerProfile[] {
  if (typeof window === "undefined") return SEED_DEALERS;
  try {
    const raw = localStorage.getItem(DEALERS_STORAGE_KEY);
    if (!raw) return SEED_DEALERS;
    const custom: DealerProfile[] = JSON.parse(raw);
    return [...custom, ...SEED_DEALERS];
  } catch (e) {
    return SEED_DEALERS;
  }
}

export function saveDealerProfile(profile: DealerProfile): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(DEALERS_STORAGE_KEY);
    const existing: DealerProfile[] = raw ? JSON.parse(raw) : [];
    const filtered = existing.filter(d => d.slug !== profile.slug);
    localStorage.setItem(DEALERS_STORAGE_KEY, JSON.stringify([profile, ...filtered]));
    return true;
  } catch (e) {
    console.error("Error saving dealer profile:", e);
    return false;
  }
}
