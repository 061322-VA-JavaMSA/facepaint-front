import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ArtComponent } from './components/art/art.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ArtComponent,
    SearchComponent,
    ProfileComponent,
    GetUserComponent,
    SignupComponent,
    LoginComponent,
    DeleteUserComponent,
    DarkLightModeComponent
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
