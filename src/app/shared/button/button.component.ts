import { Component, OnInit, Input, ElementRef } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input("isOpen") isOpen: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
