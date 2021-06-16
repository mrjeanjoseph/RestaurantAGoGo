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

  /** Favorites ctor */
  constructor(private service: RestaurantService, public router: Router) {

  }
  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  favCatogory: Restaurant[] = [];

  //need to fix the code

  //  ngOnInit() {

  //        this.service.getMyFavorites().subscribe(
  //          (response: any) => {
  //            this.favList = response;
  //            console.log(this.favList);

  //            this.favList.forEach((f: Favorite) => {
  //              if (f.userId == this.service.getID()) { this.favCatogory.push(this.restaurants.find((r: Restaurant) => r.id == f.Id)); }
  //            })
  //            console.log(this.favCatogory);
  //          }
  //        )
  //      }

  //    )

  //  }




  //  addFavorite(id: number) {
  //    this.service.addFavorite(id);

  //  }

  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);
    //let thisCategory = this.favCategories.find(e => e.id == id);
    //let index = this.favCategories.indexOf(thisCategory);
    //this.favCategories.splice(index, 1);
    this.router.navigate(['Favorites']);
  }
}
