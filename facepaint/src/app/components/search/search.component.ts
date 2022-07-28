import { Component, OnInit } from '@angular/core';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTitles!: string[];
  searchArtists!: string[];
  searchImages = new Array(5);
  searchParam: string;
  isFilled = false;

  constructor(private artServ: ArtRetrievalService) { }

  ngOnInit(): void {
  }

  checkIsFilled(){
    if(this.isFilled === true){
      return true;
    }
    return false;
  }

  search(){
    
    this.artServ.getSearchsIds(this.searchParam);
    this.searchTitles = this.artServ.searchArrTitles;
    this.searchArtists = this.artServ.searchArrArtists;
    this.searchImages = this.artServ.imageURL;
    this.isFilled = true;
  }
}
