import { Component, OnInit } from "@angular/core";
import { NgxMasonryOptions } from "ngx-masonry";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    transitionDuration: "0.8s",
    gutter: 15,
    fitWidth: true,
    percentPosition: true
  };

  masonryImages;
  limit = 15;
  dummyPictures = [
    {
      picture: "assets/images/26A89166-E365-4479-AD0D-5895133F39A0.jpg",
    },
    {
      picture: "assets/images/DSCF5196-2.jpg",
    },
    {
      picture: "assets/images/DSCF2400.jpg",
    },
    {
      picture: "assets/images/DSCF5108.jpg",
    },
    {
      picture: "assets/images/DSCF5112.jpg",
    },
    {
      picture: "assets/images/DSCF5127.jpg",
    },
    {
      picture: "assets/images/DSCF5130.jpg",
    },
    {
      picture: "assets/images/DSCF5131.jpg",
    },
    {
      picture: "assets/images/DSCF5149-2.jpg",
    },
    {
      picture: "assets/images/DSCF5159.jpg",
    },
    {
      picture: "assets/images/DSCF5167.jpg",
    },
    {
      picture: "assets/images/DSCF5196-2.jpg",
    },
    {
      picture: "assets/images/DSCF5196.jpg",
    },
    {
      picture: "assets/images/DSCF5211.jpg",
    },
    {
      picture: "assets/images/DSCF5228.jpg",
    },
    {
      picture: "assets/images/DSCF5250.jpg",
    },
    {
      picture: "assets/images/DSCF5254.jpg",
    },
    {
      picture: "assets/images/DSCF5255.jpg",
    },
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }
}
