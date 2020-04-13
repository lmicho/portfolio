import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NgxMasonryModule } from "ngx-masonry";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WorkComponent } from "./work/work.component";
import { SocialComponent } from "./shared/social/social.component";
import { NavComponent } from "./shared/nav/nav.component";
import { GalleryComponent } from './shared/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    WorkComponent,
    SocialComponent,
    NavComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
