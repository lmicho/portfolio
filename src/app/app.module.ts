import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LazyLoadImageModule, scrollPreset } from "ng-lazyload-image";
import { NgxMasonryModule} from 'ngx-masonry';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
    NgxMasonryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
