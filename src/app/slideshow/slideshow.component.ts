import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  public imgIndex: number = 0;
  public src: string = '';
  public imagesSrc: string[] = ["iceland_1", "iceland_2", "iceland_3", "iceland_4", "iceland_5", "iceland_6", "iceland_7", "iceland_8"];

  constructor() { }

  ngOnInit() {
    console.log("info", this.imgIndex)
    this.src = this.imagesSrc[this.imgIndex];
  }

  next() {
    this.imgIndex = this.imgIndex + 1;
    if (this.imgIndex > this.imagesSrc.length - 1)
      this.imgIndex = 0;
    this.src = this.imagesSrc[this.imgIndex]
  }
}