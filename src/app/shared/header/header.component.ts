import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("toogleMenu") toggleMenu;

  public isOpen: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.toggleMenu);
  }

  public toggle(event: Event) {
    this.isOpen = !this.isOpen;
    

    if (this.document.body.classList.contains("locked")) {
      this.document.body.classList.remove("locked");
    } else {
      this.document.body.classList.add("locked");
    }
  }
}
