import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { HttpHeaders } from '@angular/common/http';

//We are using angular 12
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[] = [];
  userName: string = "";
  password: string = "";
  zipCode: string = ""; 
  
  //apiUrl: string = `/yelp/businesses/search?location=${this.zipCode}&sort_by=distance&limit=50&categories=restaurants/`;
  apiUrl: string = `/yelp/businesses/search?location=${this.zipCode}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=`;



  //inject HttpClient here!
  constructor(private http: HttpClient) { }


  //Getting a list of restaurant
  getAllRestaurants(): any {
    return this.http.get(this.apiUrl);
  }


  //Favorite section
  setLogin(newlogin: string): void {
    this.userName = newlogin;
  }

  getLogin(): string {
    return this.userName;
  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }

}
