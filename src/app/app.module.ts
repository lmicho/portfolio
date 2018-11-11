import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideshowComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
