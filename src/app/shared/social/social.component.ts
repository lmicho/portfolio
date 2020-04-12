import { Component, OnInit } from "@angular/core";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.scss"],
})
export class SocialComponent implements OnInit {
  public icons = {
    instagram: faInstagram,
    github: faGithub,
    email: faAt,
    linkedin: faLinkedin,
  };

  constructor() {}

  ngOnInit(): void {}
}
