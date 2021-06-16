import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from '../Favorite';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  constructor(private service: RestaurantService, public router: Router) {

  }
  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  favCatogory: Restaurant[] = [];

  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);

    this.router.navigate(['Favorites']);
  }
}
