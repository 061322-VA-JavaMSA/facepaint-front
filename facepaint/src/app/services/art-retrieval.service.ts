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
  imageToShowSingle: any;
  sanitizedImage:any;
  imageData: any;
  title: string;
  artist: string;
  imageID : string;
  searchResults : any;
  imageURL = new Array(5);
  searchArtIds: string[];
  searchArrTitles = new Array(5);
  searchArrImages = new Array(5);
  searchArrArtists = new Array(5);
  returnArtIDS = new Array(5);

  

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
      this.imageToShowSingle = reader.result;
      this.sanitizedImage = this.sanitize(this.imageToShowSingle);
   }, false);

   //checks if image != null
   if (image) {
      reader.readAsDataURL(image);
   }
}

  //sends the retrieved byte[] to be converted
  getImageFromService(imageId: string) {
    this.getArtworkImage(imageId).subscribe(data => {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShowSingle = reader.result;
         this.sanitizedImage = this.sanitize(this.imageToShowSingle);
      }, false);
   
      //checks if image != null
      if (data) {
         reader.readAsDataURL(data);
      }
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
      this.getArtworkImage(this.imageID).subscribe(data => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
           this.imageToShowSingle = reader.result;
           this.sanitizedImage = this.sanitize(this.imageToShowSingle);
        }, false);
     
        //checks if image != null
        if (data) {
           reader.readAsDataURL(data);
        }
    });
  });
}

//sends a search request to the backend
getSearchResults(searchKeyword: string){
  let queryParam = new HttpParams().set('query', searchKeyword);
  return this.http.get(`${environment.apiUrl}/search`, {params:queryParam});
}

//converts the retrieved observable to a json object for manipulation
getSearchsIds(searchKeyword: string){
  this.getSearchResults(searchKeyword).subscribe(val => {
    this.searchResults = val;
    this.searchArtIds = [this.searchResults.data[0].id,this.searchResults.data[1].id,this.searchResults.data[2].id,this.searchResults.data[3].id,this.searchResults.data[4].id];
    this.populateArrays(this.searchArtIds);
  });

}

//populates all necessary array variables for retrieval
populateArrays(searchParam:any){
  for(let i = 0; i< searchParam.length; i++){
    this.getArtworkInfo(searchParam[i]).subscribe(val=>{
      this.imageData = val;
      this.searchArrImages[i] = this.imageData.data.image_id;
      this.searchArrArtists[i] = this.imageData.data.artist_display;
      this.searchArrTitles[i] = this.imageData.data.title;
      this.returnArtIDS[i] = searchParam[i];
      this.getSearchImageFromService(this.imageData.data.image_id, i);
    
    });
  }
}


//sends the retrieved byte[] to be converted
getSearchImageFromService(imageId: string, currPos: number) {
  this.getArtworkImage(imageId).subscribe(data => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
       this.imageURL[currPos] = this.sanitize(this.imageToShow);
    }, false);
 
    //checks if image != null
    if (data) {
       reader.readAsDataURL(data);
    }
  //this.imageURL[currPos] = this.sanitize(this.imageToShow);
  //console.log("current image url" + this.imageURL[currPos]);
});
return;
}

}
