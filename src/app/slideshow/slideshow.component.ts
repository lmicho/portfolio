import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  private index: number = 0;
  public src: string = '';
  public imagesSrc: string[] = ["iceland_1", "iceland_2", "iceland_3"];

  constructor() { }

  ngOnInit() {
    this.src = this.imagesSrc[this.index];
  }

  next() {
    this.index = this.index + 1;
    (this.index === (this.imagesSrc.length - 1)) ? this.index = 0 : this.index = this.index;
    this.src = this.imagesSrc[this.index]
  }
}