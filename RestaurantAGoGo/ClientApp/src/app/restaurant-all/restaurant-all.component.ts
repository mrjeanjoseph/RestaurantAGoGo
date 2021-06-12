import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-restaurant-all',
    templateUrl: './restaurant-all.component.html',
    styleUrls: ['./restaurant-all.component.scss']
})
  
export class RestaurantAllComponent implements OnInit{

  restaurantList: Restaurant[] = [];

    constructor(private service:RestaurantapiService) {
    
  }

  ngOnInit(): void {
    this.getRestaurants();
  }
  
  getRestaurants(): void{
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        response.businesses.forEach((b) => {
          let restaurant: Restaurant = {
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            state: b.location.state,
            zip: b.location.zip_code,
            openNow: b.is_closed,
            type: b.categories,
            img: b.image_url
          }
          this.restaurantList.push(restaurant);
        })
      });
  }

  

}
