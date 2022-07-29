import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTitles!: string[];
  searchArtists!: string[];
  searchImages: any[];
  searchParam: string;
  isFilled = false;

  constructor(private artServ: ArtRetrievalService, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe( paramMap => {
      this.searchParam = paramMap.get('p1');
      this.search();
  })
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
