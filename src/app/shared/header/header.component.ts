import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("overlay") overlay: ElementRef;
  public isOpen: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  public toggle(event) {
    console.log(event.target.classList);
    console.log(this.document.body.classList.contains("locked"));
    if (
      event.target.classList.contains("hamburger") ||
      event.target.classList.contains("toggle-button") ||
      event.target.classList.contains("hamburger__line") ||
      event.target.classList.contains("nav__link")
    ) {
      this.isOpen = !this.isOpen;
      this.document.body.classList.contains("locked")
        ? this.document.body.classList.remove("locked")
        : this.document.body.classList.add("locked");
    }
  }
}
