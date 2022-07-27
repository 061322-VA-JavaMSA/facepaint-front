import { Component, OnInit } from '@angular/core';
import { ArtRetrievalService } from 'src/app/services/art-retrieval.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //variables for use later
  searchResults: any;

  constructor(private artServ: ArtRetrievalService) { }

  ngOnInit(): void {
  }

  search(){
    this.searchResults = this.artServ.showSearchResults();
  }
}
