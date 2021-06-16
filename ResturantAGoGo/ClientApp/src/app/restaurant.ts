export interface Restaurant {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  openNow: boolean;
  type: Category[];
  yelpID: string;
  img: string;
  url: string;
}

export interface Category {
  alias: string;
  title: string;
}

