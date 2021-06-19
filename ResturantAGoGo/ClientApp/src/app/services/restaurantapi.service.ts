import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Restaurant } from './Restaurant';
import { Router } from '@angular/router';
import { Favorite } from './Favorite';
import { DatastoreService } from './datastore.service';

@Injectable({ providedIn: 'root' })


export class RestaurantapiService {

  zip_code = 0;
  categories = "";
  oneFav = "";
  apiUrl: string = `/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=${this.categories}`;
  constructor(private http: HttpClient, private datastore: DatastoreService, public router: Router) {
   
  }
  baseUrl: string;
  restaurants: Restaurant[] = [];
  favorites: Favorite[] = [];
  fav: Favorite = {
    favoriteId: -1,
    userId: -1,
    yelpId: '',
    restaurantName: '',
    restaurantAddress: '',
    img:''
  };

  //To get the restaurants details 

  setZip(zip_code: number): any {   
    this.zip_code = zip_code;
  }

  setCategory(categories: string): any {
    this.categories = categories;
  }

  //Trying to create a method to inital toggling the fav
  toggled = true;
  toggleFavorite(restaurant: string): any {
    this.toggled = !this.toggled;
    this.oneFav = restaurant;
  }

  getAllRestaurants(): any {
    return this.http.get(`/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=${this.categories}`);
  }

  getMyFavorites(): any {
    return this.http.get(`api/Restaurant/getmyfavorites`);
  }
  
  currentId: number = -1;

  setID(newId: number): void {
    this.currentId = newId;
  }

  getID(): number {
    return this.currentId;
  }
  
  //https://localhost:44334/api/Restaurant/addfavorite?userId=3&yelpID=mex123&restaurantName=Mexican&restaurantAddress=Troy&img=sdds233
  addFavorite(restaurant: Restaurant) {
    console.log(this.datastore.getUser());
    this.setID(this.datastore.getUser().userId);
    /*this.light2 = !this.light2; //*//*checking if light toggle works*/
    let newFavorite : Favorite = {
      favoriteId: null,
      userId: this.currentId,
      yelpId: restaurant.yelpID,
      restaurantName: restaurant.name,
      restaurantAddress: restaurant.address,
      img: restaurant.img
    };
    
    const params = new HttpParams();
    return this.http.post("api/Restaurant/addfavorite?userId=" + newFavorite.userId + "&yelpID=" + newFavorite.yelpId + "&name=" + newFavorite.restaurantName + "&address=" + newFavorite.restaurantAddress +"&img=" + newFavorite.img, params)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );

  }

  //Remove Favorite
  removeFavorite(favoriteId: number, userId:number) {
    return this.http.delete("/api/Restaurant/deletefav?userId=" + userId + "&favId=" + favoriteId).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  }

  //random
  randomCall() {

    return this.http.get(`/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=`);   
    
  }

  //viewSingleRestaurant(restaurant: Restaurant) {
  //  let restaurantDetail: Restaurant = {
  //    name: restaurant.name,
  //    address: restaurant.address,
  //    city: restaurant.city,
  //    state: restaurant.state,
  //    zip: restaurant.zip,
  //    img: restaurant.img,
  //    url: restaurant.url,
  //    type: restaurant.type,
  //    yelpID: restaurant.yelpID
  //  }
  //  return this.http.get();
  //}
  getRestaurantbyID(id: string): any {
    return this.http.get(`yelp/businesses/${id}`);
  }
}

