import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DnD Tools';
  linkActive: boolean;
  createActive: boolean;

  constructor() {
    this.findActiveTabOnLoad();
  }

  findActiveTabOnLoad() {
    this.linkActive = window.location.pathname === '/tracker' ? true : false;
    this.createActive = window.location.pathname === '/creator' ? true : false;
  }

  linkTabClicked() {
    this.linkActive = true;
    this.createActive = false;
  }

  createTabClicked() {
    this.createActive = true;
    this.linkActive = false;
  }
}
