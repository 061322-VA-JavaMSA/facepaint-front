import { Component, OnInit } from '@angular/core';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTitles: string[];
  searchArtists: string[];
  searchImages: string[];
  searchParam: string;

  constructor(private artServ: ArtRetrievalService) { }

  ngOnInit(): void {
  }

  search(){
    
    this.artServ.getSearchsIds(this.searchParam);
    //this.artServ.getSearchArtistTitle();
    this.searchTitles = this.artServ.searchArrTitles;
    this.searchArtists = this.artServ.searchArrArtists;
    this.searchImages = this.artServ.searchArrImages;
  }
}
