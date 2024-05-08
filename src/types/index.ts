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
  key: string | number;
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
  key: string | number;
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

export interface AppState {
  globarSearch: {
    toggleModal: boolean;
  };
}

export interface ToggleModalAction {
  type: 'TOGGLE_MODAL';
  open: boolean;
}

export interface InitialStateType {
  globarSearch: {
    toggleModal: boolean;
  };
}

export type SearchInputProps = {
  setRockets: (data: RocketType[]) => void;
  rockets: RocketType[];
  data: {
    rockets: RocketType[];
  };
};
