import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { SubtitleComponent } from './component/subtitle/subtitle.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import {AppRoutingModule} from './module/app-routing/app-routing.module';
import { TagcloudViewComponent } from './component/tagcloud-view/tagcloud-view.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
