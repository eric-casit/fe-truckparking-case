import { Point } from 'geojson';

export interface Parking {
  id: string;
  name: string;
  location: Point;
  address: Address;
  capacity: Capacity;
  pricing?: Pricing;
  safetyEquipment: SafetyEquipment[];
  safetyClassification?: SafetyClassification;
  otherSafetyDescription?: string;
  serviceEquipment: ServiceEquipment[];
  organization: Organization;
  contact?: Contact;
}

export interface Address {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface Capacity {
  places: number;
  refrigeratedPlaces: number;
  lzvPlaces: number;
}

export interface Pricing {
  hourlyRate: number;
  url?: string;
}

export interface SafetyClassification {
  securityLevel?: SecurityLevel;
  classificationDate: string;
}

export interface Organization {
  id: string;
  name: string;
  isPrivate: boolean;
}

export interface Contact {
  department?: string;
  emailAddress: string;
}

export enum SecurityLevel {
  Bronze = 'BRONZE',
  Silver = 'SILVER',
  Gold = 'GOLD',
}

export enum SafetyEquipment {
  GuardNone = 'GUARD_NONE',
  GuardPhysical = 'GUARD_PHYSICAL',
  GuardDispatch = 'GUARD_DISPATCH',
  Guard247 = 'GUARD_247',
  RegularPatrol = 'REGULAR_PATROL',
  Cctv = 'CCTV',
  Lighting = 'LIGHTING',
  Fence = 'FENCE',
  Barrier = 'BARRIER',
  Unknown = 'UNKNOWN',
}

export enum ServiceEquipment {
  Toilets = 'TOILETS',
  Shower = 'SHOWER',
  Sleeping = 'SLEEPING',
  Wifi = 'WIFI',
  Electricity = 'ELECTRICITY',
  DrinkableWater = 'DRINKABLE_WATER',
  WasteDisposal = 'WASTE_DISPOSAL',
  PetrolStation = 'PETROL_STATION',
  RestaurantBuffet = 'RESTAURANT_BUFFET',
  ElectronicChargeStation = 'ELECTRONIC_CHARGE_STATION',
  VehicleMaintenance = 'VEHICLE_MAINTENANCE',
  Pharmacy = 'PHARMACY',
  Playground = 'PLAYGROUND',
  Vault = 'VAULT',
  MedicalFacility = 'MEDICAL_FACILITY',
}
