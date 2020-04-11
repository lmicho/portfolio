import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LazyLoadImageModule, scrollPreset } from "ng-lazyload-image";
import { NgxMasonryModule} from 'ngx-masonry';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, HeaderComponent, WorkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
    NgxMasonryModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
