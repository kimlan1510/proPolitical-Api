import { Component, OnInit } from '@angular/core';
import { SenatorSearchService } from '../senator-search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers: [ SenatorSearchService ]
})
export class DetailPageComponent implements OnInit {

  senatorId: string;
  senatorToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private senatorSearchService: SenatorSearchService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.senatorId = urlParameters['id'];
    });

    this.senatorSearchService.getSpecificSenator(this.senatorId)
    .subscribe(response => {
      this.senatorToDisplay = response.json().results[0];
    })
    // this.senatorToDisplay = this.senatorSearchService.getSpecificSenator(this.senatorId);
    // console.log(this.senatorToDisplay);
  }
}
