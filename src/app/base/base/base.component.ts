import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  // Attribute to toogle side navigation
  openedSideNav = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // Toogle sidenavigation
  toggleSidenav() {
    this.openedSideNav = !this.openedSideNav;
  }

}
