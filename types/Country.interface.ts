export interface Country {
  _id?: string;
  id?: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flags: { svg: string };
}
