import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Attribute to toogle side navigation
  openedSideNav = false;

  constructor() { }

  ngOnInit() {
  }

  // Toogle sidenavigation
  toggleSidenav() {
    this.openedSideNav = !this.openedSideNav;
  }

}
