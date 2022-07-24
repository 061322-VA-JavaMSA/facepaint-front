import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})

export class ArtComponent implements OnInit {
   ngOnInit(): void {
    this.getImageFromService();
  }

  constructor(private http: HttpClient, private sanitizer: DomSanitizer){}

  readonly ROOT_URL = 'http://localhost:8080';

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getArtwork(): Observable<Blob>{
   let queryParam = new HttpParams().set('imageID','2fa24f36-cc26-41b6-4b49-12bba2a6c1c8');
   return this.http.get(this.ROOT_URL+'/artwork',{params:queryParam, responseType:'blob'});
  }

  imageToShow: any;

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

getImageFromService() {
  
  this.getArtwork().subscribe(data => {
    this.createImageFromBlob(data);
  });
}
}

  
//2fa24f36-cc26-41b6-4b49-12bba2a6c1c8
