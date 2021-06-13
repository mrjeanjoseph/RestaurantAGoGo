import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './Restaurant';

@Injectable()
export class RestaurantapiService {

  apiUrl: string = "/yelp/businesses/search?location=27610&sort_by=distance&limit=50&categories=restaurants";

  constructor(private http: HttpClient) { }

  restaurants: Restaurant[] = [];

  getAllRestaurants(): any {
    return this.http.get(this.apiUrl);
  }

}
