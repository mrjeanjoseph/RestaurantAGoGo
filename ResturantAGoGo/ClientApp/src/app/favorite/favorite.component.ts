import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from '../favorite';
import { Restaurant } from '../restaurant';
import { DatastoreService } from '../services/datastore.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  constructor(private service: RestaurantService, public router: Router, private datastoreService: DatastoreService) { }

  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  favCatogory: Restaurant[] = [];

  ngOnInit() {
    this.service.getMyFavorites().subscribe(
      (response: any) => {
        this.favList = response.filter((f: Favorite) => f.userId == this.datastoreService.getUser().userId);
        console.log(this.favList);
      }
    )
  }

  addFavorite(restaurant: Restaurant) {
    this.service.addFavorite(restaurant);

  }

  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);
    let thisCategory: any = this.favList.find(e => e.favoriteId == favId);
    let index = this.favList.indexOf(thisCategory);
    this.favList.splice(index, 1);
  }
}
