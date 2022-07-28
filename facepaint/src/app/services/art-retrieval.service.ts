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
  imageData: any;
  title: string;
  artist: string;
  searchResults : any;
  imageURL: any;

  

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //scrubs the data url so that the img tag can read it
  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  //retrieves the art image as a byte[]
  getArtworkImage(imageId: string): Observable<Blob>{
   let queryParam = new HttpParams().set('imageID', imageId);
   return this.http.get(`${environment.apiUrl}/artwork`,{params:queryParam, responseType:'blob'});
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
  getImageFromService(imageId: string) {
    this.getArtworkImage(imageId).subscribe(data => {
    this.createImageFromBlob(data);
    this.imageURL = this.sanitize(this.imageToShow);
  });
}

//retrieves the art information as an observable object
getArtworkInfo(artId: string){
  let queryParam = new HttpParams().set('artId', artId);
  return this.http.get(`${environment.apiUrl}/artId`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
showArtInfo(artId : string){
    this.getArtworkInfo(artId).subscribe(val => {
      this.imageData = val;
      this.title = this.imageData.data.title;
      this.artist = this.imageData.data.artist_display;
    //console.log(this.imageData.data.id);
  });
}

//sends a search request to the backend
getSearchResults(searchKeyword: string){
  let queryParam = new HttpParams().set('query', searchKeyword);
  return this.http.get(`${environment.apiUrl}/search`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
showSearchResults(searchKeyword: string){
  this.getSearchResults(searchKeyword).subscribe(val => {
  this.searchResults = val;
  //console.log(this.imageData.data.id);
});

return this.searchResults;
}

}
