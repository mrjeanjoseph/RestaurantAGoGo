export interface Restaurant {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  type: Category[];
  yelpID: string;
  img: string;
  url: string;
}

interface Category {
  alias: string;
  title: string;
}

