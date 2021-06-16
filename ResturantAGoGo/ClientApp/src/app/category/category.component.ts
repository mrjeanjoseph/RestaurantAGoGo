import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatastoreService } from '../services/datastore.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  zip_code: string = '';
  categories: string = '';

  constructor(private service: RestaurantService, public router: Router, public datastoreservice: DatastoreService) {

  }
  setZipCode(form: NgForm): void {
    console.log(this.datastoreservice.getUser());
    this.zip_code = form.form.value.zip_code;
    console.log(this.zip_code);
    this.service.setZip(this.zip_code);
  }

  setCategoryClick(categories: string): void {
    this.categories = categories;
    console.log(this.categories);
    this.service.setCategory(this.categories);
    this.router.navigate(['/restaurant-all']);
  }

}
