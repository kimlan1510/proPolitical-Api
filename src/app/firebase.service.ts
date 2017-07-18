import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Senator } from './senator.model';

@Injectable()
export class FirebaseService {
  senators: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
  this.senators = firebase.list('senators')
  }

  addSenator(newSenator: Senator){
    this.senators.push(newSenator);
  }

  getSenators(){
    return this.senators;
  }

  deleteSenator(selectedSenator){
    let foundSenator = this.getSenatorById(selectedSenator.$key);
    foundSenator.remove();
  }

  getSenatorById(senatorId: string){
    return this.firebase.object('senators/' + senatorId);
  }

}
