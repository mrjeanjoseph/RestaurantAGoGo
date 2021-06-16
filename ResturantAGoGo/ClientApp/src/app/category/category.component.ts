import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  /*restByCatList: Restaurant[] = [];*/
  zip_code: string = '';
  categories: string = '';

  /** category ctor */
  constructor(private service: RestaurantService, public router: Router) {

  }
  setZipCode(form: NgForm): void {
    this.zip_code = form.form.value.zip_code;
    console.log(this.zip_code);
    this.service.setZip(this.zip_code);
  }

  setCategoryClick(categories: string): void {
    this.categories = categories;
    console.log(this.categories);
    this.service.setCategory(this.categories);
    this.router.navigate(['/welcomepage']);
  }
}
