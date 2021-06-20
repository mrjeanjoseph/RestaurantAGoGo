import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private restaurantapiservice: RestaurantapiService, private datastoreservice: DatastoreService) {
    
  }

  whoIsLoggedIn: string = "";

  checkLogin(): boolean {
    let user = this.datastoreservice.getUser();
    if (user.userName != null) {
      if (this.restaurantapiservice.getID() != -1)
      {
        this.restaurantapiservice.setID(user.userId);
        this.whoIsLoggedIn = this.datastoreservice.getUser();
        console.log(this.datastoreservice.getUser());
      
      }
      return true;
    }
    else
    {
      return false;
    }
  }
}
