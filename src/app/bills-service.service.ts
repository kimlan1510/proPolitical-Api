import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { proPublicaApiKey } from './proPublica-api-keys';

@Injectable()
export class BillsServiceService {

  constructor(private http: Http) { }

  getBillsBySenator(senatorId: string){
    let headers = new Headers();
    headers.append('X-API-Key', proPublicaApiKey);
    return this.http.get('https://api.propublica.org/congress/v1/members/' + senatorId +'/bills/introduced.json', { headers: headers });
  }

}
