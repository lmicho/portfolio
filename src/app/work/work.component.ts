import { Component, OnInit } from "@angular/core";
import { NgxMasonryOptions } from "ngx-masonry";

@Component({
  selector: "app-home",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    transitionDuration: "0.8s",
    gutter: 15,
    fitWidth: true
  };

  masonryImages;
  limit = 15;
  dummyPictures = [
    {
      picture: "assets/images/26A89166-E365-4479-AD0D-5895133F39A0.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF5196-2.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF2400.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF5108.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF5112.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5127.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5130.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5131.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5149-2.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5159.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF5167.jpg",
      tag: "street",
    },
    {
      picture: "assets/images/DSCF5196-2.jpg",
      tag: "outdoors",
    },
    {
      picture: "assets/images/DSCF5196.jpg",
      tag: "outdoors",
    },
    {
      picture: "assets/images/DSCF5211.jpg",
      tag: "outdoors",
    },
    {
      picture: "assets/images/DSCF5228.jpg",
      tag: "outdoors",
    },
    {
      picture: "assets/images/DSCF5250.jpg",
      tag: "outdoors",
    },
    {
      picture: "assets/images/DSCF5254.jpg",
      tag: "landscape",
    },
    {
      picture: "assets/images/DSCF5255.jpg",
      tag: "outdoors",
    },
  ];

  ngOnInit() {
    //let sousGroup = this.dummyPictures.filter((x) => x.tag === "outdoors");
    //this.masonryImages = sousGroup.slice(0, this.limit);

    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  public select(option) {
    console.log(option);
    let sousGroup = this.dummyPictures.filter((x) => x.tag === option);
    this.masonryImages = sousGroup.slice(0, this.limit);
  }
}
