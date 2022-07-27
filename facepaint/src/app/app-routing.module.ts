import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ArtComponent} from "./components/art/art.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'profile',
  component: ProfileComponent
  //canActivate: [Guard] // used to make sure user is logged in
},{
  path: 'art',
  component: ArtComponent
}, {
  path: 'users',
  component: SignupComponent
},{
  path: 'login',
  component: LoginComponent
}, {
  path: "signup",
  component: SignupComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
