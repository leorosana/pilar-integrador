export interface IPlace {
  name: string;
  address: Address;
  description: string;
  days_hours_open: string;
  picture: string;
}

interface Address {
  lat: number;
  long: number;
  map: string;
}