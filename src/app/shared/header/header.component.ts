import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("toogleMenu") toggleMenu;

  public isOpen: boolean = false;
  public faInstagram = faInstagram;

  public faGithub = faGithub;
  public faEmail = faAt;
  public faLinkedin = faLinkedin;

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
