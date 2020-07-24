import {
  Component,
  OnInit,
  Input,
  Inject,
  ElementRef,
  HostListener,
} from "@angular/core";
import { NgxMasonryOptions } from "ngx-masonry";
import * as data from "../../../assets/images.json";
import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export interface Image {
  src: string;
  tag: string;
  feature: boolean;
}

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
  public options: NgxMasonryOptions = {
    transitionDuration: "0.8s",
    gutter: 10,
    percentPosition: true,
  };
  public selectedCategory: string = "all";
  public masonryImages: Array<Picture>;
  public rawPictures: Array<Picture> = data["default"].sort(
    () => Math.random() - 0.5
  );
  public isOpen: boolean = false;
  public overlayImage: string;
  public noImages: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {
    this.masonryImages = this.rawPictures;
  }

  @HostListener("document:keydown", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    const ESCAPE_KEYCODE = 27;
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.zoom();
    }
  }

  ngOnInit(): void {
    if (this.featured) {
      let sousGroup = this.rawPictures.filter((x) => x.featured === true);
      this.masonryImages = sousGroup;
    } else {
      this.select("street");
    }
  }

  public select(option) {
    this.selectedCategory = option;
    let sousGroup = this.rawPictures.filter((x) => x.tag.includes(option));
    this.masonryImages = sousGroup;
    this.noImages = sousGroup.length === 0 ? true : false;
  }

  public zoom(event?, src?) {
    if (window.innerWidth > 992) {
      this.isOpen = !this.isOpen;
      this.document.body.classList.contains("locked")
        ? this.document.body.classList.remove("locked")
        : this.document.body.classList.add("locked");
      this.overlayImage =
        "https://portfolio-image-lm.s3.us-east-2.amazonaws.com/" + src;
    }
  }
}
