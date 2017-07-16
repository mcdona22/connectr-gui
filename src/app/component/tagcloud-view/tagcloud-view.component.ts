import { Component, OnInit } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import {PersonService} from '../../service/person.service';

@Component({
  selector: 'app-tagcloud-view',
  templateUrl: './tagcloud-view.component.html',
  styleUrls: ['./tagcloud-view.component.css']
})
export class TagcloudViewComponent implements OnInit {
  options: CloudOptions = {
    width: 500,
     height: 400,
    overflow: false
  }

  data: Array<CloudData> = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.data = this.personService.getPeople();
  }

}
