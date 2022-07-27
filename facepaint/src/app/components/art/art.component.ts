import { Component, OnInit } from '@angular/core';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})

export class ArtComponent implements OnInit {

  //variables for later use
  artInformation: any;
  artImage: any;

   constructor(private artServ: ArtRetrievalService){}

   ngOnInit(): void {
  }

  showArtImage(){
    return this.artServ.getImageFromService();
  }

  showArtInformation(){
    return this.artServ.showArtInfo();
  }

}