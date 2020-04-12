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
  private isLocked = this.document.body.classList.contains("locked");

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  public toggle(event) {
    if (
      event.target.classList.contains("hamburger") ||
      event.target.classList.contains("nav__link")
    ) {
      this.isOpen = !this.isOpen;
      this.isLocked
        ? this.document.body.classList.remove("locked")
        : this.document.body.classList.add("locked");
    }
  }
}
