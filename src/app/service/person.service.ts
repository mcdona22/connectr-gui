import { Injectable } from '@angular/core';
import {CloudData} from 'angular-tag-cloud-module';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from "selenium-webdriver/http";



export const DATA: Array<CloudData> = [
  {text: 'JBOSS', weight: 10, color: 'darkred'}
  , {text: 'java', weight: 35}
  , {text: 'cucumber', weight: 41, color: 'red'}
  , {text: 'apaas', weight: 12, color: 'black'}
  , {text: 'exe-agent', weight: 17, color: 'green'}
  , {text: 'bridgehead', weight: 18, color: 'teal'}
  , {text: 'cdf', weight: 15, color: 'red'}
  , {text: 'gradle', weight: 46, color: 'purple', link: 'https://gradle.org/', external: true}
  , {text: 'maven', weight: 23, color: 'teal'}
  , {text: 'junit', weight: 7, color: 'black'}
  , {text: 'payments', weight: 44, color: 'royalblue'}
  , {text: 'git', weight: 65, color: 'red'}
  , {text: 'jenkins', weight: 32, color: 'navyblue'}
  , {text: 'groovy', weight: 74, color: 'navyblue'}
];

@Injectable()
export class PersonService {
  private dataUrl = '/api/tech';

  constructor(private http: Http) { }

  getPeople(): Promise <CloudData[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(
        response => response.json().data as CloudData[])
      .catch(this.handleError);
    // return Promise.resolve(DATA);
  }

  private handleError(error: any): Promise<any> {
    console.error('WTF - error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
