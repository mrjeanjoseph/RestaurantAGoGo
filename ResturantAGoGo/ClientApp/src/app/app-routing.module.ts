import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


//There's a possible error here
const routes: Routes = [
  { path: '', component: WelcomepageComponent, pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent }, // This will list all of the restaurant
  { path: 'category', component: FavoriteComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
