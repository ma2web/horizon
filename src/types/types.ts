// ENUMS
export enum CountryColor {
  'Republic of the Marshall Islands' = 'blue',
  'United States' = 'purple',
}

export enum RocketStatusType {
  'active' = 'blue',
  'retired' = 'orange',
}

export interface RocketType {
  id: string;
  name: string;
  description: string;
  country: string;
}

// INTERFACES
export interface RocketTableType extends RocketType {
  key: string;
}

export interface LounchpadType {
  id: string;
  location: {
    region: string;
    name: string;
    longitude: string;
    latitude: string;
  };
  name: string;
  status: string;
}

export interface LounchpadTableType extends LounchpadType {
  key: string;
}
