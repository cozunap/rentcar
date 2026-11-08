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
