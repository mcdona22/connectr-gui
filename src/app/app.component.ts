import { Component } from '@angular/core';
import {PersonService} from './service/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [PersonService]
})
export class AppComponent {
  title = 'Connectr';
}
