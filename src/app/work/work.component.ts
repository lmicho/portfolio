import { Component, OnInit } from "@angular/core";
import { NgxMasonryOptions } from "ngx-masonry";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  public options: NgxMasonryOptions = {
    transitionDuration: "0.8s",
    gutter: 10,
    percentPosition: true,
  };

  public selectedCategory: string = "all";

  masonryImages;
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
    this.select("all");
  }

  showMoreImages() {
    this.masonryImages = this.dummyPictures;
  }
  public select(option) {
    this.selectedCategory = option;
    if (option === "all") {
      this.masonryImages = this.dummyPictures;
    } else {
      let sousGroup = this.dummyPictures.filter((x) => x.tag === option);
      this.masonryImages = sousGroup;
    }
  }
}
