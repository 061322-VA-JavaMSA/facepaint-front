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
  imageID : string;
  searchResults : any;
  imageURL: any;
  searchArtIds : string[];
  searchArrTitles:string[];
  searchArrImages: any[];
  searchArrArtists:string[];

  

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
      this.imageID = this.imageData.data.image_id;
    //console.log(this.imageData.data.id);
  });
}

//sends a search request to the backend
getSearchResults(searchKeyword: string){
  let queryParam = new HttpParams().set('query', searchKeyword);
  return this.http.get(`${environment.apiUrl}/search`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
getSearchsIds(searchKeyword: string){
  this.getSearchResults(searchKeyword).subscribe((val) => {
    this.searchResults = val;
    this.searchArtIds = [this.searchResults.data[0].id,this.searchResults.data[1].id,this.searchResults.data[2].id,this.searchResults.data[3].id,this.searchResults.data[4].id];
    for(let i = 0; i< this.searchArtIds.length; i++){
      this.showSearchArtInfo(this.searchArtIds[i]).subscribe((response)=>{
        this.imageData = response;
        this.searchArrArtists.push(this.imageData.data.artist_display);
        this.searchArrTitles.push(this.imageData.data.title);
        this.searchArrImages.push(this.imageData.data.image_id);
      });
      this.getImageFromService(this.imageID);
      this.searchArrImages.push(this.sanitize(this.imageToShow));
    }
  });
  //this.getSearchResults(searchKeyword).subscribe(val => {
  //this.searchResults = val;
  //this.searchArtIds = [this.searchResults.data[0].id,this.searchResults.data[1].id,this.searchResults.data[2].id,this.searchResults.data[3].id,this.searchResults.data[4].id];
  //console.log(this.searchArtIds);
  // this.searchArrTitles = [this.searchResults.data[0].artist_display,this.searchResults.data[1].artist_display,this.searchResults.data[2].artist_display,this.searchResults.data[3].artist_display,this.searchResults.data[4].artist_display];
  //this.searchArrTitles = [];

  //console.log(this.imageData.data.id);
//});

}

showSearchArtInfo(artId : string){
 return this.getArtworkInfo(artId)
}

getSearchArtistTitle(){
  for(let i = 0; i< this.searchArtIds.length; i++){
    this.showArtInfo(this.searchArtIds[i]);
    this.searchArrImages.push(this.sanitize(this.imageToShow));
  }
  console.log("Art Array" + this.searchArrImages);
  console.log("Art Titles" + this.searchArrTitles);
  console.log("Art Artists" + this.searchArrArtists);
}

}
