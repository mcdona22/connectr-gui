import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../../component/welcome-page/welcome-page.component';
import {AboutPageComponent} from '../../component/about-page/about-page.component';
import {TagcloudViewComponent} from '../../component/tagcloud-view/tagcloud-view.component';

const ROUTES = [
  {path: 'home', pathMatch: 'full', component: WelcomePageComponent}
  , {path: 'about', component : AboutPageComponent}
  , {path: 'tag', component : TagcloudViewComponent}
  , {path: '', redirectTo: 'home', pathMatch: 'full'}

]


@NgModule({
  imports: [
    CommonModule, CommonModule, RouterModule.forRoot(ROUTES) ]
  , exports: [RouterModule]
  , declarations: []
})
export class AppRoutingModule { }
