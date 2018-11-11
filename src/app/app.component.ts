import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'Home Page';

  private isOpen = false;


  constructor(
  ) {

  }

  toggleSidebar() {
    (!this.isOpen) ? this.isOpen = true : this.isOpen = false;
  }


}
