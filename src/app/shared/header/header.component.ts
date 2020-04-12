import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isOpen: boolean = false;
  private isLocked = this.document.body.classList.contains("locked");

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  public toggle(event: Event) {
    this.isOpen = !this.isOpen;
    this.isLocked
      ? this.document.body.classList.remove("locked")
      : this.document.body.classList.add("locked");
  }
}
