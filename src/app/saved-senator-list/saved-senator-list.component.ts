import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Senator } from '../senator.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-saved-senator-list',
  templateUrl: './saved-senator-list.component.html',
  styleUrls: ['./saved-senator-list.component.css'],
  providers: [ FirebaseService ]
})
export class SavedSenatorListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  senators: FirebaseListObservable <any[]> = null;
  ngOnInit() {
    this.senators = this.firebaseService.getSenators();
  }

  deleteSenator(selectedSenator: Senator) {
    this.firebaseService.deleteSenator(selectedSenator);
    alert('This senator has been deleted from your list of saved senators!');
  }

}
