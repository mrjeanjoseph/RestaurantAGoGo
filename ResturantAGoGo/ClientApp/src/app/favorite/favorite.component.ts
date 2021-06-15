import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from '../Favorite';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  constructor(private service: Restaurant, public router: Router) {

  }
  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  favCatogory: Restaurant[] = [];

}
