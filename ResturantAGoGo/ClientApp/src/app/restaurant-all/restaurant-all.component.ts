import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
  selector: 'app-restaurant-all',
  templateUrl: './restaurant-all.component.html',
  styleUrls: ['./restaurant-all.component.css']
})

/** RestaurantAll component*/
export class RestaurantAllComponent implements OnInit {

  restaurantList: Restaurant[] = [];
  filteredRestaurantLists: Restaurant[] = [];

  currentId: number;

  /** RestaurantAll ctor */
  constructor(private service: RestaurantapiService, private route: ActivatedRoute, public router: Router) {

  }

  ngOnInit(): void {
    this.getRestaurants();
    this.listFilter = '';
  }

  getRestaurants(): void {
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        response.businesses.forEach((b) => {
          /*console.log(b);*/
          let restaurant: Restaurant = {
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            state: b.location.state,
            zip: b.location.zip_code,
            type: b.categories,
            yelpID: b.id,
            img: b.image_url,
            url: b.url,
            rating: b.rating,
            phone: b.display_phone,
            price: b.price,
            latitude: b.latitude,
            longitude: b.longitude
          }
          this.restaurantList.push(restaurant);
          this.filteredRestaurantLists.push(restaurant);
        })
        console.log(response);
      });
  }


  addFavorite(restaurant: Restaurant) {

    this.currentId = this.service.getID();

    if (this.currentId == undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.service.addFavorite(restaurant);
      this.router.navigate(['restaurant-all']);
    }
    this.service.addFavorite(restaurant);
    this.router.navigate(['restaurant-all']);
  }

  removeFavorite(userId: number, favId: number) {
    this.service.removeFavorite(userId, favId);
    this.router.navigate(['restuarant-all']);
  }

  //Trying to create a handler to call the method
  oneFav: string = "";

  toggleFavoriate(oneFav: string): void {
    this.oneFav = oneFav;
    this.service.toggleFavorite(this.oneFav);
  } 

  private _listFilter: string = '';
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRestaurantLists = this.filterAllRestaurant(value);
  }


  filterAllRestaurant(filterBy: string): Restaurant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurantList.filter((oneRestaurant: Restaurant) =>
      oneRestaurant.name.toLocaleLowerCase().includes(filterBy));
  }
}
