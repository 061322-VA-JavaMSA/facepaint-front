import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtRetrievalService {
  imageToShow: any;
  imageData : any;
  searchResults : any;
  

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //scrubs the data url so that the img tag can read it
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  //retrieves the art image as a byte[]
  getArtworkImage(): Observable<Blob>{
   let queryParam = new HttpParams().set('imageId','2fa24f36-cc26-41b6-4b49-12bba2a6c1c8');
   return this.http.get(`${environment.apiUrl}/showArt`,{params:queryParam, responseType:'blob'});
  }

  //converts the byte[] to a data url
  createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   //checks if image != null
   if (image) {
      reader.readAsDataURL(image);
   }
}

  //sends the retrieved byte[] to be converted
  getImageFromService() {
    this.getArtworkImage().subscribe(data => {
    this.createImageFromBlob(data);
  });
}

//retrieves the art information as an observable object
getArtworkInfo(){
  let queryParam = new HttpParams().set('artId', '179972');
  return this.http.get(`${environment.apiUrl}/artId`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
showArtInfo(){
    this.getArtworkInfo().subscribe(val => {
    this.imageData = val;
    //console.log(this.imageData.data.id);
  });
}

//sends a search request to the backend
getSearchResults(){
  let queryParam = new HttpParams().set('query', 'picasso');
  return this.http.get(`${environment.apiUrl}/search`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
showSearchResults(){
  this.getSearchResults().subscribe(val => {
  this.searchResults = val;
  //console.log(this.imageData.data.id);
});
}

}
