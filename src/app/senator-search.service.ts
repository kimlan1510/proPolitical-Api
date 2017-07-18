import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { proPublicaApiKey } from './proPublica-api-keys';

@Injectable()
export class SenatorSearchService {

  constructor(private http: Http) { }

  getSenatorByState(state: string){
    let headers = new Headers();
    headers.append('X-API-Key', proPublicaApiKey);
    return this.http.get('https://api.propublica.org/congress/v1/members/senate/' + state + '/current.json', { headers: headers });
  }

  getSpecificSenator(id: string) {
    let headers = new Headers();
    headers.append('X-API-Key', proPublicaApiKey);
    return this.http.get('https://api.propublica.org/congress/v1/members/' + id + '.json', { headers: headers });
  }
}
