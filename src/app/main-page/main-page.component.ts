import { Component, OnInit } from '@angular/core';
import { SenatorSearchService } from '../senator-search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [SenatorSearchService]
})

export class MainPageComponent{
  senatorListByState: string[];
  isSenator: boolean = false;

  constructor(private senatorSearch: SenatorSearchService) { }

  getSenatorByState(state: string){
     this.senatorSearch.getSenatorByState(state).subscribe(response => {
        if(response.json().results.length > 0){
         this.senatorListByState = response.json().results;
         this.isSenator = true;
        }
        else
        {
          this.isSenator = false;
        }
     });
  }
}
