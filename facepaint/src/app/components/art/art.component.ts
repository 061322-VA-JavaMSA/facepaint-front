import { Component, OnInit } from '@angular/core';
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
  

   constructor(private artServ: ArtRetrievalService){}

   ngOnInit(): void {
    this.artImage = '';
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
    this.artServ.showArtInfo(this.artIdInput);
    this.imageTitle = this.artServ.title;
    this.imageArtist = this.artServ.artist;
  }
  
  showArtImage(){
   this.artServ.getImageFromService(this.artImageIdInput);
   this.artImage = this.artServ.sanitizedImage;
  }

}