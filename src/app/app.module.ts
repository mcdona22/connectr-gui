import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';

import {TagCloudModule} from 'angular-tag-cloud-module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { SubtitleComponent } from './component/subtitle/subtitle.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import {AppRoutingModule} from './module/app-routing/app-routing.module';
import { TagcloudViewComponent } from './component/tagcloud-view/tagcloud-view.component';
import {InMemoryDataService } from './service/in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SubtitleComponent,
    WelcomePageComponent,
    AboutPageComponent,
    TagcloudViewComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , TagCloudModule
    , HttpModule
    // , HttpClientModule
    , InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
