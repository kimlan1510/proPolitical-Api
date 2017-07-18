import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './firebase-api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SenatorListStateComponent } from './senator-list-state/senator-list-state.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SavedSenatorListComponent } from './saved-senator-list/saved-senator-list.component';
import { BillsBySenatorComponent } from './bills-by-senator/bills-by-senator.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SenatorListStateComponent,
    DetailPageComponent,
    SavedSenatorListComponent,
    BillsBySenatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
