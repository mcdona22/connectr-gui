import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import {CloudData} from 'angular-tag-cloud-module';


@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const tech: Array<CloudData> = [
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

    return {tech};

  }

}
