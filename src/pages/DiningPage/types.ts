export type ContinentKey =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Australia'
  | 'Antarctica';

export interface DiningPlace {
  title: string;
  city: string;
  desc: string;
  continent: ContinentKey;
  bill: string;
  link: string;
}
