import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})

export class ArtComponent implements OnInit {

  //images title to be displayed
  imageTitle: string;

  //images' artist to be displayed
  imageArtist: string;
  
  //art id to search for art information
  artIdInput: string;

  //image id to retrieve the actual image
  artImageIdInput: string;

  //actual image to be displayer
  artImage: any;

  artData: any;

  imageToShowSingle: any;
  sanitizedImage: any;

  notNull = false;
  

   constructor(private artServ: ArtRetrievalService, private activated: ActivatedRoute){}

   ngOnInit(): void {
    this.activated.paramMap.subscribe( paramMap => {
      this.artIdInput = paramMap.get('p1');
      this.showArtInformation();
  })
  }

  //sets the image id
  setArtImageIdInput(artInput:string){
    this.artImageIdInput = artInput;
  }

  //sets the art id for art information
  setArtIdInput(artInput : string){
    this.artIdInput = artInput;
  }


  showArtInformation(){
    this.artServ.getArtworkInfo(this.artIdInput).subscribe(val => {
      this.artData = val;
      this.imageTitle = this.artData.data.title;
      this.imageArtist = this.artData.data.artist_display;
      this.artImage = this.artData.data.image_id;
      this.artServ.getArtworkImage(this.artImage).subscribe(data => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
           this.imageToShowSingle = reader.result;
           this.sanitizedImage = this.artServ.sanitize(this.imageToShowSingle);
           this.notNull = true;
        }, false);
     
        //checks if image != null
        if (data) {
           reader.readAsDataURL(data);
        }
    });
  });
  }
  
  showArtImage(){
   this.artServ.getImageFromService(this.artImageIdInput);
   this.artImage = this.artServ.sanitizedImage;
  }

  checknotNull(){
    if(this.notNull === true){
      return true;
    }
    return false;
  }

  updateShowcase(){
    //TODO to be implemented
    //this.artImage holds the image_id gathered from api
    console.log("this button was clicked. Image_id:" + this.artImage);
  }

}