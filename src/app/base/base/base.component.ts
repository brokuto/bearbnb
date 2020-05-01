import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseUserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  // Attribute to toogle side navigation
  openedSideNav = false;
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
      }
    });

    console.log(this.user);
  }

  // Toogle sidenavigation
  toggleSidenav() {
    this.openedSideNav = !this.openedSideNav;
  }


  logout() {
    this.authService.doLogout();
    /* location.reload(); */
  }

}
