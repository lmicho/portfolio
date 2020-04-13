import {
  Component,
  OnInit,
  Input,
  Inject,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { NgxMasonryOptions } from "ngx-masonry";
import * as data from "../../../assets/images.json";
import { DOCUMENT } from "@angular/common";

export interface Picture {
  picture: string;
  tag: string;
  featured: boolean;
}

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  @Input("sort") sort: ElementRef;
  @Input("featured") featured: ElementRef;
  @ViewChild("overlay") overlay: ElementRef;
  public options: NgxMasonryOptions = {
    transitionDuration: "0.8s",
    gutter: 10,
    percentPosition: true,
  };
  public selectedCategory: string = "all";
  public masonryImages: Array<Picture>;
  public rawPictures = [data.default][0];
  public isOpen: boolean = false;
  public overlayImage: string;
  public isPortrait: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.masonryImages = this.rawPictures;
  }

  ngOnInit(): void {
    if (this.featured) {
      let sousGroup = this.rawPictures.filter((x) => x.featured === true);
      this.masonryImages = sousGroup;
    } else {
      this.select("all");
    }
  }

  public select(option) {
    this.selectedCategory = option;
    if (option === "all") {
      this.masonryImages = this.rawPictures;
    } else {
      let sousGroup = this.rawPictures.filter((x) => x.tag === option);
      this.masonryImages = sousGroup;
    }
  }

  public zoom(src?, orientation?) {
    if (window.innerWidth < 992) {
    } else {
      this.isOpen = !this.isOpen;
      this.document.body.classList.contains("locked")
        ? this.document.body.classList.remove("locked")
        : this.document.body.classList.add("locked");
      this.overlayImage = src;
      this.isPortrait = orientation === "portrait" ? true : false;
    }
  }
}
