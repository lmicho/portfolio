import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }