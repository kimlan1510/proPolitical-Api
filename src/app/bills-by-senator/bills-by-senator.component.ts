import { Component, OnInit, Input } from '@angular/core';
import { BillsServiceService } from '../bills-service.service';

@Component({
  selector: 'app-bills-by-senator',
  templateUrl: './bills-by-senator.component.html',
  styleUrls: ['./bills-by-senator.component.css'],
  providers: [ BillsServiceService ]
})
export class BillsBySenatorComponent implements OnInit {
  @Input() childSenatorId;
  billsList;
  constructor(private billsService: BillsServiceService) { }

  ngOnInit() {
    this.billsService.getBillsBySenator(this.childSenatorId).subscribe(response =>{
      this.billsList = response.json().results[0].bills;
    })
  }

}
