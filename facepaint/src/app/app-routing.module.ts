import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ArtComponent} from "./components/art/art.component";
import {GetUserComponent} from "./get-user/get-user.component";

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
  component: GetUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
