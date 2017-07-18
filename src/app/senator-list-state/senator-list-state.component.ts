import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Senator } from '../senator.model';
import * as firebase from "firebase";
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-senator-list-state',
  templateUrl: './senator-list-state.component.html',
  styleUrls: ['./senator-list-state.component.css'],
  providers: [ FirebaseService ]
})

export class SenatorListStateComponent implements OnInit {
  @Input() childSenatorList;

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {

  }

  goToDetailPage(clickedSenator) {
    this.router.navigate(['senators-by-state', clickedSenator.id])
  }

  saveSenator(name: string, gender: string, role: string, party: string, id: string){
    let newSenator: Senator = new Senator(name, gender, role, party, id);
    this.firebaseService.addSenator(newSenator);
    alert("you added a senator to firebase database");
  }

}
