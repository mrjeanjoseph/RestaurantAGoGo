export interface Favorite{
  favoriteId: number;
  userId: number;
  yelpId: string;
  restaurantName: string;
  restaurantAddress: string;
  img: string;

}

export interface Category {
  alias: string;
  title: string;
}
