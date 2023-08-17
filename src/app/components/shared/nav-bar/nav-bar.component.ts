import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  public user?: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = Security.getUser();
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
