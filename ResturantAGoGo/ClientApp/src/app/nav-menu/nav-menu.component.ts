import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent{


  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private restaurantservice: RestaurantService, private datastoreservice: DatastoreService) { }

  checkLogin(): boolean {
    let user = this.datastoreservice.getUser();
    if (user.userName != null) {
      if (this.restaurantservice.getID() != -1) {
        this.restaurantservice.setID(user.userId);
        console.log(this.restaurantservice
      }
      return true;
    }
    else {
      return false;
    }
  }

}
