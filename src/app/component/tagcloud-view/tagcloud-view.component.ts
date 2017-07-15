import { Component, OnInit } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';

@Component({
  selector: 'app-tagcloud-view',
  templateUrl: './tagcloud-view.component.html',
  styleUrls: ['./tagcloud-view.component.css']
})
export class TagcloudViewComponent implements OnInit {
  options: CloudOptions = {
    width: 1000,
     height: 400,
    overflow: false
  }

  data: Array<CloudData> = [
    {text: 'JBOSS', weight: 10}
    , {text: 'java', weight: 35}
    , {text: 'cucumber', weight: 4, color: 'red'}
    , {text: 'apaas', weight: 12, color: 'black'}
    , {text: 'exe-agent', weight: 7, color: 'green'}
    , {text: 'bridgehead', weight: 18, color: 'teal'}
    , {text: 'cdf', weight: 15, color: 'red'}
    , {text: 'gradle', weight: 46, color: 'purple', link: 'https://gradle.org/', external: true}
    , {text: 'maven', weight: 23, color: 'red'}
    , {text: 'junit', weight: 7, color: 'blue'}
    , {text: 'payments', weight: 44, color: 'red'}
    , {text: 'git', weight: 65, color: 'red'}
    , {text: 'jenkins', weight: 32, color: 'red'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
